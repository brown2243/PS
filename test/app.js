function makeCamelCase(str) {

  
}
// function makeCamelCase(str) {

// }
// function makeCamelCase(str) {

// }

class RC {
  constructor(str) {
    this.str = str;
    this.camelCase = makeCamelCase(str);
  }
}

(() => {
  const rc = new RC("Just_someSample-text");
  console.log(rc);
  console.log(rc.camelCase);
})();
