$(document).ready(function() {
   var initialLocation = new google.maps.LatLng(10.988600,-74.800117);

   var map = new google.maps.Map(document.getElementById('map'), {
       center: initialLocation,
       scrollwheel: false,
       zoom: 16
   });

    var myIcon = {
        url: "/images/profile_ja_mod.jpg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };


    var initialMarker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        label: 'Yo',
        title: 'Here I am initially',
    /*
        This is the way to replace marker with any image
        icon: '/images/profile_ja_mod.jpg'
    */
        icon: myIcon
    });

    var request = {
        location: initialLocation,
        radius: '500', // in meters
        types: ['park','hospital']
    };

    var icon = {
        url: "/images/customLocationIcon.png", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    function callback(results, status) {
        //console.log(results);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);
            }
        }
    }

    function createMarker(latLngObject) {
        var marker = new google.maps.Marker({
            position: latLngObject.geometry.location,
            map: map,
            title: latLngObject.name,
            animation: google.maps.Animation.DROP,
            icon: icon
        });

    }
});