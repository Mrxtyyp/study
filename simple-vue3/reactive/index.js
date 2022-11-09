const isObject = (value) => {
    return value !== null && typeof value === "object";
}

function reactive(data) {

    if(!isObject(data)) {
        return data;
    }

    const proxyConfig = {
        get(target, key, receiver){
          const ownKeys = Reflect.ownKeys(target)
          if (ownKeys.includes(key)) {
            console.log('get', key)
          }
          const result = Reflect.get(target, key, receiver)
          /* 深度监听修改1
            return result
          */
          /*
            性能提升：在get时去递归，去深度监听
            而 defineProperty 是开始时就递归完成
          */
          return reactive(result)
          
        },
        set(target, key, val, receiver){
          if(val === target[key]){return true}
          
          /* 可监听到新增的key */
          const ownKeys = Reflect.ownKeys(target)
          if(ownKeys.includes(key)){
            // 已有的可以
          }else{
            // 新增的key
            console.log('新增的key')
          }
          
          const result = Reflect.set(target, key, val, receiver)
          console.log('set', key, val)
          return result
        },
        deleteProperty(target, key){
          const result = Relect.deleteProperty(target, key)
          console.log('delete property', key)
          return result
        }
      }

    const proxy = new Proxy(data, proxyConfig)

    return proxy
}