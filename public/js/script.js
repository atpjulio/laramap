//var initialLocation = new google.maps.LatLng(10.4655092,-66.5878451);
var initialLocation = new google.maps.LatLng(10.988600,-74.800117);
var map = new google.maps.Map(document.getElementById('map'), {
    center: initialLocation,
    scrollwheel: false,
    zoom: 17
});
var icon = {
    url: "/images/customLocationIcon.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};

$(document).ready(function() {
    getLocationInit();
    createMap(initialLocation);
    nearBySearch(initialLocation, ['park','hospital']);

    /**
     * Map functions
     */
    function createMap(latLng)
    {
        var myIcon = {
            url: "/images/profile_ja_mod.jpg", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        var initialMarker = new google.maps.Marker({
            position: latLng,
            map: map,
            label: 'Yo',
            title: 'Here I am initially',
            icon: myIcon
        });
    }

    function nearBySearch(latLng, types)
    {
        var request = {
            location: latLng,
            radius: '500', // in meters
            types: types
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
    }

    function callback(results, status)
    {
        //console.log(results);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);
            }
        }
    }

    function createMarker(latLngObject)
    {
        var marker = new google.maps.Marker({
            position: latLngObject.geometry.location,
            map: map,
            title: latLngObject.name,
            animation: google.maps.Animation.DROP,
            icon: icon
        });

    }

    /**
     * Geolocation functions
     */
    function getLocationInit()
    {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successOnGeoLocation, failOnGeoLocation);
        } else {
            alert("Explorador no soporta geo localización");
        }
    }

    function successOnGeoLocation(position)
    {
        var latVal = position.coords.latitude;
        var lngVal = position.coords.longitude;

        initialLocation = new google.maps.LatLng(latVal, lngVal);
    }

    function failOnGeoLocation()
    {
        alert("Falla en la geo localización");
    }
});