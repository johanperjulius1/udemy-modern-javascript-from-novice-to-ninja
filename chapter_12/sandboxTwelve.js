const getTodos = (resource, callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4 ){
      callback('could not fetch data', undefined);
    }
  })

  request.open('GET', resource)
  request.send();
}

console.log(1)

getTodos('../chapter_12/todos/carro.json', (err, data)=> {
  if(err) {
    console.log(err)
    return;
  }
    console.log(data)
    getTodos('../chapter_12/todos/pappa.json', (err, data)=> {
      if(err) {
        console.log(err)
        return;
      }
        console.log(data)
        getTodos('../chapter_12/todos/mamma.json', (err, data)=> {
          if(err) {
            console.log(err)
            return;
          }
            console.log(data)
            return;
        });
        return;
      });
    return;
});





console.log(2)


