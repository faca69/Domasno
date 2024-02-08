fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('error');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.title); 
  })
  .catch(error => {
    console.error(error);
  });
