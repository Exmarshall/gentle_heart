
    function initMap() {
      var mapOptions = {
        center: { lat: 11.9942, lng: 8.5336 },
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var marker = new google.maps.Marker({
        position: { lat: 11.9942, lng: 8.5336 },
        map: map,
        title: "Support for Future Generation"
      });
    }

    google.maps.event.addDomListener(window, 'load', initMap);
