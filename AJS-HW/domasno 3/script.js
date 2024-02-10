fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("ERROR");
    }
  })
  .then((todo) => {
    console.log(todo.title);
  })
  .catch((error) => {
    console.error(error);
  });

  