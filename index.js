// promises//

let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve(console.log("Promise resolved"));
  } else {
    reject(console.log("promise rejected"));
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// async await//
async function xyz() {
  try {
    let data = await myPromise;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

xyz();
