let getData = (url, callback) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'json'
    xhr.onload = () => {
        let status = xhr.status
        if(status == 200) {
            callback(null, xhr.response)
        } else {
            callback(status, null)
        }
    }
    xhr.send();
}

getData('http://time.jsontest.com/', (error, data) => {
    if(error != null) {
        console.log('OOPS', error)
    } else {
        let txt = `at ${data.time}`
        document.getElementsByTagName('h1')[0].append(txt)
    }
})

