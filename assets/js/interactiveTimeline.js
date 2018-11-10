      var map;
      var dateOverlays = new Map()
      dateOverlays.set(1868, {"img": "", "bounds": new google.maps.LatLngBounds(
          new google.maps.LatLng(42.98235, -71.47152),
          new google.maps.LatLng(43.00393, -71.46273)
        )})
      dateOverlays.set(1892, 
        {"img":"/assets/img/Manchester 1892.png", "bounds": new google.maps.LatLngBounds(
          new google.maps.LatLng(42.98035, -71.470026),
          new google.maps.LatLng(43.002605, -71.46053)
        )});
      dateOverlays.set(1966, {"img": "", "bounds": new google.maps.LatLngBounds(
          new google.maps.LatLng(42.98235, -71.47152),
          new google.maps.LatLng(43.00393, -71.46373)
        )})
      dateOverlays.set(1972, {"img": "", "bounds": new google.maps.LatLngBounds(
          new google.maps.LatLng(42.98235, -71.47152),
          new google.maps.LatLng(43.00393, -71.46373)
        )})

      function selectDate(hashDate) {
  $("ul#dates>li>div.selected").removeClass("selected")
  $("ul#dates div:has(a[href='" + hashDate + "'])").addClass("selected")
  var overlayData = dateOverlays.get(parseInt(hashDate.replace("#", "")))
  if (overlayData && overlayData.img) {
    overlay = new ImageOverlay(overlayData.bounds, overlayData.img, map)
  }
}

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.993735, lng: -71.467577},
          zoom: 16,
          disableDefaultUI: true,
          styles: ANTIQUE_MAP_STYLES
        });
      }
      google.maps.event.addDomListener(window, 'load', initMap);