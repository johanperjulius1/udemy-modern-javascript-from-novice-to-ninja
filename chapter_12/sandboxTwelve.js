const getTodos = (callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4 ){
      callback('could not fetch data', undefined);
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
  request.send();
}

console.log(1)

getTodos((err, data)=> {
  console.log('callback fired')
  if(err) {
    console.log(err)
    return;
  }
    console.log(data)
    return;
});

console.log(2)


