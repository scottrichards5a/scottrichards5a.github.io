var map;
var dateOverlays = new Map()
dateOverlays.set(1868, {"img": "", "bounds": new google.maps.LatLngBounds(
    new google.maps.LatLng(42.98235, -71.47152),
    new google.maps.LatLng(43.00393, -71.46273)
  )})
dateOverlays.set(1892, 
  {"img":"/assets/img/Manchester 1892.png", "bounds": new google.maps.LatLngBounds(
    new google.maps.LatLng(42.981010, -71.470185),
    new google.maps.LatLng(43.000955, -71.459155)
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

$( document ).ready(function() {

  var dateIter = dateOverlays.keys();
  var nextDate = dateIter.next();
  while (!nextDate.done) {
    $('<li><div><a href="#' + nextDate.value + '">' + nextDate.value + '</a></div></li>').insertBefore($("ul#dates li:has(div.selected)"));
    nextDate = dateIter.next();
  }

  // Date has already been selected
  var urlFragment = window.location.hash
  if (urlFragment) {
    selectDate(urlFragment);
  }

  $("div.map").click(function() {
    $("div.satellite").removeClass("selected");
    $("div.map").addClass("selected");
    map.setMapTypeId("roadmap");
  });

  $("div.satellite").click(function() {
    $("div.map").removeClass("selected");
    $("div.satellite").addClass("selected");
    map.setMapTypeId("satellite");
  });

  $("div.increase_zoom").click(function() {
    var zoom = map.getZoom();
    map.setZoom(zoom + 1);
  });

  $("div.decrease_zoom").click(function() {
    var zoom = map.getZoom();
    map.setZoom(zoom - 1);
  });

  $("div#expand").click(function() {
    $("div#timeline").animate({
       left: '0'
    });
    $("div#expand_collapse").animate({
      left: '175px'
    });
  });

  $("div#collapse").click(function() {
    $("div#timeline").animate({
       left: '-175px'
    });
    $("div#expand_collapse").animate({
      left: '0'
    });
  });

  $("ul#dates a").click(function() {
    selectDate($(this).attr("href"));
  });
});