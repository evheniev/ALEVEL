function initMap() {
    var markerArray = []

    var directionsService = new google.maps.DirectionsService
    //
    var  map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 50.0166813, lng: 36.229560}
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({map: map})

    var stepDisplay = new google.maps.InfoWindow
    //
    calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map)

    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map)
    }
    document.getElementById('start').addEventListener('change', onChangeHandler)
    document.getElementById('end').addEventListener('change', onChangeHandler)
}

function calculateAndDisplayRoute(directionsDisplay, directionsService,markerArray, stepDisplay, map) {
            
    for (var i = 0; i < markerArray.length; i++) {
        markerArray[i].setMap(null)
    }
            
    directionsService.route(
        {
            origin: document.getElementById('start').value,
            destination: document.getElementById('end').value,
            travelMode: 'WALKING',
            provideRouteAlternatives: true
        }, 
        function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response)
                showSteps(response, markerArray, stepDisplay, map)
            } else {
                window.alert('Directions request failed due to ' + status)
            }
        }
    )
}

function showSteps(directionResult, markerArray, stepDisplay, map) {
            
    var myRoute = directionResult.routes[0].legs[0];
    for (var i = 0; i < myRoute.steps.length; i++) {
        var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
        marker.setMap(map);
        marker.setPosition(myRoute.steps[i].start_location);
        attachInstructionText(stepDisplay, marker, myRoute.steps[i].instructions, map);
    }
}

function attachInstructionText(stepDisplay, marker, text, map) {
    google.maps.event.addListener(marker, 'click', function() {
        stepDisplay.setContent(text)
        stepDisplay.open(map, marker)
    })
}       