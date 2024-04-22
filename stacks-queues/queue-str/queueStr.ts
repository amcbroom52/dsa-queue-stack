import { IndexError } from "../common/ll";

/** QueueStr: can remove from start or add to end */

class QueueStr {

  _array: string[] = [];

  constructor(initial: string[] = []) {
    for (let str of initial) {
      this._array.push(str);
    }
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    this._array.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if(this._array.length === 0) throw new IndexError();

    return this._array.shift()!;
  }

  /** peek(): return the value of first item. */
  peek(): string {
    if(this._array.length === 0) throw new IndexError();

    return this._array[0];
  }

  /** isEmpty(): is the queue empty? */
  isEmpty(): boolean {
    return this._array.length === 0;
  }
}


export { QueueStr };
