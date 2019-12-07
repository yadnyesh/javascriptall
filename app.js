let xhr = new XMLHttpRequest();
console.log(xhr.readyState);
console.log(xhr.status)

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        document.write("ALL DONE");
        console.log(xhr.readyState, xhr.status)
    }
}

xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
xhr.send();