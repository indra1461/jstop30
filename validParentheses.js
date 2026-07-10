

function validParentheses(str) {
  const stack = [];

  const map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      const last = stack.pop();

      if (last !== map[str[i]]) {
        return false;
      }
    } else {
      stack.push(str[i]);
    }
  }

  return stack.length === 0;
}






console.log(validParentheses('()[]{}'))