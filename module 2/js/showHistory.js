function showHistory() {
    fetch('http://localhost:3000/history')
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data)
                for (var x in data) {
                    let div = document.createElement("div")
                    let info = document.getElementById("history")
                    info.appendChild(div).innerHTML = `<p id = "RS">${data[x].id} lat: ${data[x].lat} lng: ${data[x].lng} time: ${data[x].time}</p>`
                }
            })
        })
}