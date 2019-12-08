let customPost = {
    title: "Hello World",
    body: "Ye hai meri kahaani.... yada yada",
    userId: 1
};

let customHeader = {
    "Content-Type": "application/json; charset=UTF-8"
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: customHeader,
    body: JSON.stringify(customPost)
})
    .then(response => response.json())
    .then(response => console.log(response))