asyncfunction = async () => {
  console.log("starting");
  await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((todos) => {
      return fetch(`https://jsonplaceholder.typicode.com/todos/${todos[0].id}`)
        .then((todobyidres) => todobyidres.json())
        .then((firsttodo) => ({ todos, firsttodo }));
    })
    .then(({ todos, firsttodo }) => console.log(todos, firsttodo));
  console.log("Ended");
};

//1
asyncfunction = async () => {
  console.log("starting");
  const alltodos = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo = await alltodos.json();
  const fetchfirsttodo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todo[0].id}`
  );
  const firsttodo = await fetchfirsttodo.json();
  console.log({ todo, firsttodo });
  console.log("Ended");
};

//2
asyncfunction = async () => {
  console.log("starting");
  const demo = fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
  console.log("first");
  const alltodos = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo = await alltodos.json();
  console.log("second");
  const fetchfirsttodo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todo[0].id}`
  );
  const firsttodo = await fetchfirsttodo.json();
  console.log("Third");
  console.log({ todo, firsttodo });
  console.log("Ended");
  const demoresult = await demo;
};

//3
asyncfunction = async () => {
    console.log("starting");
    const demo = fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json()
    );
    console.log("first");

    const alltodos = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todo = await alltodos.json();
    console.log("second");
    const fetchfirsttodo = await fetch(
      `https://jsonplaceholder.typicode.com/todosjj/${todo[0].id}`
    );
    const firsttodo = await fetchfirsttodo.json();
    const demoresult = await demo;
    console.log("Third");
    console.log({ todo, firsttodo });
    console.log("Ended");
  };

  //4
  try {
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers,
      body: '{"title":"Hi"}',
    })
      .then(() =>
        fetch("https://jsonplaceholder.typicode.com/todosdddd").then(
          (response) => {
            console.log("interresting");
            return response.json();
          }
        )
      )
      .then((body) => console.log(body))
      .catch((err) => console.log("something wrong"));
  } catch {}  