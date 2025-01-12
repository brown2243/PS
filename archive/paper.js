class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new TreeNode(rootValue);
  }
}
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => {
          const newValue = callback(this.value);
          if (newValue) {
            this.value = newValue;
          }
        });
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled) {
    this.onFulfilledCallbacks.push(onFulfilled);
    return this;
  }
}

new MyPromise((res, rej) => {
  setTimeout(() => {
    res(100);
  }, 100);
})
  .then((v) => {
    v *= 10;
    console.log(v);
    return v;
  })
  .then((v) => {
    v *= 10;
    console.log(v);
    return v;
  });

const p = new Promise(function (res, rej) {
  setTimeout(() => {
    res(100);
  }, 100);
})
  .then((v) => {
    v *= 10;
    return v;
  })
  .then(function (v) {
    v *= 10;
    return v;
  });
