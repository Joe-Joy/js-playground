promise = new Promise(function (resolve, reject) {
  resolve();
});

// if choosing resolve()
promise = new Promise(function (resolve, reject) {
  resolve();
});
promise.then(function () {
  console.log("finally finished"); //the output is : finally finished
});

// if choosing reject - using then and catch method

promise = new Promise(function (resolve, reject) {
  reject();
});
promise.then(function () {
  console.log("finally finished"); //the output is : undefined
});
promise.then(function () {
  console.log("finally completed"); //the output is : undefined
});
promise.catch(function () {
  console.log("error"); //the output is : error
});

// if choosing resolve - using then and catch method
promise = new Promise(function (resolve, reject) {
    resolve();
  });
  promise.then(function () {
    console.log("finally finished"); //the output is : finally finished
  });
  promise.then(function () {
    console.log("finally completed"); //the output is : finally completed
  });
  promise.catch(function () {
    console.log("error"); //the output is : undefined
  });

 
  // if choosing resolve - setTimeout
promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();
    }, 2000); //after 2 seconds we will show the result
   
  });
  promise.then(function () {
    console.log("finally finished"); //the output is : finally finished
  });
  promise.then(function () {
    console.log("finally completed"); //the output is : finally completed
  });
  promise.catch(function () {
    console.log("error"); //the output is : undefined
  });

  // if choosing resolve - setTimeout
promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject();
    }, 2000); 
  });
  promise.then(function () {
    console.log("finally finished"); //the output is : undefined
  });
  promise.then(function () {
    console.log("finally completed"); //the output is : undefined
  });
  promise.catch(function () {
    console.log("error"); //the output is : error
  });