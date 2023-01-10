import { createLinkList } from "./linkList";

describe("测试生成链表", () => {
  it("正常生成", () => {
    const arr = [100, 200, 300, 400];
    const linklist = createLinkList(arr);
    expect(linklist.value).toBe(100);
    expect(linklist.next?.value).toBe(200);
    expect(linklist.next?.next?.value).toBe(300);
    expect(linklist.next?.next?.next?.value).toBe(400);
  });
});
