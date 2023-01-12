import { MyQueue, QueueList } from "./stacksQueue";

describe("测试队列", () => {
  it("正常情况", () => {
    const queue = new MyQueue();
    queue.add(100);
    queue.add(200);
    queue.add(300);
    expect(queue.length).toBe(3);
    const del = queue.delete();
    expect(del).toBe(100);
    expect(queue.length).toBe(2);
  });

  it("链表队列测试", () => {
    const queue = new QueueList();
    queue.add(100);
    queue.add(200);
    queue.add(300);
    expect(queue.length).toBe(3);
    const del = queue.delete();
    expect(del).toBe(100);
    expect(queue.length).toBe(2);
  });
});
