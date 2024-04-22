import { Stack, StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {
  if (str.length < 2) {
    return str;
  }

  const reversalStack = new Stack();
  let reversedStr = "";

  for (let i = 0; i < str.length; i++) {
    reversalStack.push(str[i]);
  }

  while(!reversalStack.isEmpty()) {
    reversedStr += reversalStack.pop();
  }

  return reversedStr;
}

export { stringReversal };