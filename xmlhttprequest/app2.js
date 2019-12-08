function requestListener() {
    console.log('this is how the request looks like NOW ', this)
    let data = JSON.parse(this.responseText)
    console.log('the response text now is converted to JSON', data)
}

function requestError() {
    console.log('oops, some issue happened')
}

let url = "https://randomuser.me/api/"
let method = "GET"

let xhr = new XMLHttpRequest();
console.log('Initially, this is what the request looks like initially', xhr)

xhr.open(method, url, true)

xhr.onload = requestListener

xhr.onerror = requestError

xhr.send()



