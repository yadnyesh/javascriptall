let url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
.then(data => data.json())
.then(newData => console.log(newData))