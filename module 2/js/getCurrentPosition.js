let findMeButton = document.getElementById('findMe')

if (!navigator.geolocation) {
    findMeButton.addClass("disabled")
    document.getElementById('no-browser-support').addClass("visible")
} else {
    getData = function( event ) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude
            var lng = position.coords.longitude
            fetch ( 'http://localhost:3000/history', {
                method: 'POST',
                body: JSON.stringify ({
                    "lat": lat ,
                    "lng": lng,
                    "time":(new Date()).toUTCString()
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then ( response => {
                    console.log ( 'response: ', response )
                })
            document.getElementById("latitude").innerHTML = `${lat.toFixed(6)}`
            document.getElementById('longitude').innerHTML = `${lng.toFixed(6)}`
        })
    }
}