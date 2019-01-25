function getDataFromDataBase() {
    fetch('http://localhost:3000/places')
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data)
                    for ( var x in data) {
                        let start = document.getElementById("start")
                        let end = document.getElementById("end")
                        start.append(new Option(`${data[x].name}`, `${data[x].lat}, ${data[x].lng}`))
                        end.append(new Option(`${data[x].name}`, `${data[x].lat}, ${data[x].lng}`))
                    }    
                    fetch('http://localhost:3000/history')
                        .then(function (response) {
                            response.json().then(function (data) {
                                console.log(data)
                                let div = document.createElement("div")
                                let lastPosition = data[data.length-1]
                                start.append(new Option(`Your Geo`, `${lastPosition.lat}, ${lastPosition.lng}`))
                                end.append(new Option(`Your Geo`, `${lastPosition.lat}, ${lastPosition.lng}`))
                            })
                        })
            })
        })

}