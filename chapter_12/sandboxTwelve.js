// const getTodos = (resource, callback) => {

//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4 ){
//       callback('could not fetch data', undefined);
//     }
//   })

//   request.open('GET', resource)
//   request.send();
// }

const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('could not fetch data');
      }
    })

    request.open('GET', resource)
    request.send();
  })
}

getTodos('../chapter_12/todos/mamma.json')
  .then((data) => {
    console.log('Promise resolved', data);
    return getTodos('../chapter_12/todos/pappa.json');
  })
  .then((data) => {
    console.log('Promise 2 resolved', data);
  })
  .catch((err) => {
    console.log(err)
  })

// const fetchData = () => {

//   return new Promise((resolve, reject) => {
//     // fetch something
//     // resolve('my real data')
//     reject('my error data')
//   })
// }

// fetchData().then((data) => {
//   console.log(data)
// }, (err) => {
//   console.log(err)
// })


// fetchData().then((data) => {
//   console.log(data)
// }).catch((err) => {
//   console.log(err)
// })




















// 12.93 - Callback hell

// console.log(1)

// getTodos('../chapter_12/todos/carro.json', (err, data)=> {
//   if(err) {
//     console.log(err)
//     return;
//   }
//     console.log(data)
//     getTodos('../chapter_12/todos/pappa.json', (err, data)=> {
//       if(err) {
//         console.log(err)
//         return;
//       }
//         console.log(data)
//         getTodos('../chapter_12/todos/mamma.json', (err, data)=> {
//           if(err) {
//             console.log(err)
//             return;
//           }
//             console.log(data)
//             return;
//         });
//         return;
//       });
//     return;
// });
// console.log(2)


