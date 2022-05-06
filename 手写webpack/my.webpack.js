const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

let ID = 0;

function createAssets(path) {
    // 1、获取到es6 code
    const content = fs.readFileSync(path, 'utf-8')

    // 2、将code转为ast 可以去在线ast网站看效果https://astexplorer.net/
    const ast = parser.parse(content, {
        sourceType: 'module'
    })

    // console.log(ast);

    const dependencies = []
    // 遍历ast节点找到依赖放入dependencies中
    traverse(ast, {
        ImportDeclaration: ({node}) => {
            dependencies.push(node.source.value)
        }
    })

    // console.log(dependencies);

    const {code} = babel.transformFromAstSync(ast, null, {
        // @babel/preset-env 智能预设，允许使用最新的 JavaScript 语法
        presets: ['@babel/preset-env']
    })
    
    const id = ID++;
    return {
        id,
        filename: path,
        dependencies,
        code
    }
}

// 构建依赖图
function createGraph(entry) {
    const assets = createAssets(entry)

    const queue = [assets]
    for(const asset of queue) {
        const dirname = path.dirname(asset.filename)
        asset.mapping = {};
        asset.dependencies.forEach(relativeFilePath => {
            const absoluteFilePath = path.join(dirname, relativeFilePath);
            const child = createAssets(absoluteFilePath)
            asset.mapping[relativeFilePath] = child.id;
            queue.push(child)
        })
    }
    return queue
}

// 生产bundle.js
function bundle(graph) {
    let modules = ''

    graph.forEach(mod => {
        modules += `
            ${mod.id}: [
                function (require, module, exports) {
                    ${mod.code}
                },
                ${JSON.stringify(mod.mapping)}
            ],
        `
    })

    const result = `
        (function (modules) {
            function require(id) {
                const [fn, mapping] = modules[id]

                function localRequire(filekey) {
                    return require(mapping[filekey])
                }

                const module = {
                    exports: {}
                }

                fn(localRequire, module, module.exports)
            }
            require(0)
        })({${modules}})
    `
    return result;
}

const graph = createGraph('./src/index.js')

// 写入到/dist/bundle.js
const fileStream = fs.createWriteStream('./dist/bundle.js')

fileStream.write(bundle(graph))

fileStream.end()
