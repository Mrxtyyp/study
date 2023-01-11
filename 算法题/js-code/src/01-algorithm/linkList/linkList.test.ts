import { createLinkList, reverseLinkList } from "./linkList";

describe("测试生成链表", () => {
  it("正常生成链表", () => {
    const arr = [100, 200, 300, 400];
    const linklist = createLinkList(arr);
    expect(linklist.value).toBe(100);
    expect(linklist.next?.value).toBe(200);
    expect(linklist.next?.next?.value).toBe(300);
    expect(linklist.next?.next?.next?.value).toBe(400);
  });

  it("反转单向链表正常情况", () => {
    const arr = [100, 200, 300, 400];
    const linklist = createLinkList(arr);
    const linklist1 = reverseLinkList(linklist);
    console.log(linklist);
    expect(linklist1).toEqual({
      value: 400,
      next: {
        value: 300,
        next: {
          value: 200,
          next: {
            value: 100,
            next: null,
          },
        },
      },
    });
  });
});
