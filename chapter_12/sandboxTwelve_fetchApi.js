
const getTodos = (resource) => {
  fetch(resource)
  .then((response) => {
    if(response.status !== 200) {
      throw new Error;
    }
    if(response.status === 200) {
      return response.json();
    }
  }).then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log('something went wrong')
  })
}

getTodos('../chapter_12/todos/pappa.json')
getTodos('../chapter_12/todos/mamma.json')


