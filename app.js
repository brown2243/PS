function makeCamelCase(str) {
  const splitedStr = str.split(/[^a-zA-Z0-9]/);
  const first = splitedStr.slice(0, 1).map((str) => str.toLowerCase());
  const left = splitedStr
    .slice(1)
    .map(
      (str) =>
        str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
    );
  return first.concat(left).join("");
}

function makeConstantCase(str) {
  const splitedStr = str.split(/[^a-zA-Z0-9]/);
  const newStrArr = [];

  splitedStr.forEach((word) => {
    const temp = [];
    const splitedWord = word.split("");
    let text = "";
    splitedWord.forEach((s, idx) => {
      if (idx === 0) {
        text += s;
      } else {
        if (s === s.toUpperCase()) {
          temp.push(text);
          text = s;
        } else {
          text += s;
        }
      }
    });
    temp.push(text);
    newStrArr.push(...temp);
  });
  return newStrArr.map((str) => str.toUpperCase()).join("_");
}
function makeSnakeCase(str) {
  const splitedStr = str.split(/[^a-zA-Z0-9]/);
  const newStrArr = [];

  splitedStr.forEach((word) => {
    const temp = [];
    const splitedWord = word.split("");
    let text = "";
    splitedWord.forEach((s, idx) => {
      if (idx === 0) {
        text += s;
      } else {
        if (s === s.toUpperCase()) {
          temp.push(text);
          text = s;
        } else {
          text += s;
        }
      }
    });
    temp.push(text);
    newStrArr.push(...temp);
  });
  return newStrArr.map((str) => str.toLowerCase()).join("_");
}

class RC {
  constructor(str) {
    this.str = str;
    this.camelCase = makeCamelCase(str);
    this.constantCase = makeConstantCase(str);
    this.snakeCase = makeSnakeCase(str);
  }
}

(() => {
  const rc = new RC("Just_someSample-text");
  console.log(rc);
  console.log(rc.camelCase);
  console.log(rc.constantCase);
  console.log(rc.snakeCase);
  const rc2 = new RC("JustAssdWTqwtwqdWs_someSample-text");
  console.log(rc2);
})();
