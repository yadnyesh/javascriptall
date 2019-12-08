function requestListener() {
    console.log('this is how the request looks like NOW ', this)
    let data = JSON.parse(this.responseText)
    console.log('the response text now is converted to JSON', data)
    let userData = data.results[0]
    console.log('user looks like ', userData)
    let fname = userData.name.first
    let lname = userData.name.last
    let imageSource = userData.picture.large

    let li = document.createElement('li')
    let img = document.createElement('img')
    let p = document.createElement('p')

    img.src = imageSource
    p.innerHTML = `${fname} ${lname}`

    document.getElementById('user').appendChild(li)
    li.appendChild(img)
    li.appendChild(p)

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



