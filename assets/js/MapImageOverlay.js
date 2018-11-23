ImageOverlay.prototype = new google.maps.OverlayView();

function ImageOverlay(overlayId, bounds, image, map) {
  this.overlayId_ = overlayId
  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = map;
  this.div_ = null;
  this.setMap(map);
}

ImageOverlay.prototype.onAdd = function() {
  var div = document.createElement('div');
  $(div).attr('id', 'imageOverlay_' + this.overlayId_)
  $(div).addClass('imageOverlay')
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';
  var img = document.createElement('img');
  img.src = this.image_;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.position = 'absolute';
  div.appendChild(img);
  this.div_ = div;
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
};

ImageOverlay.prototype.draw = function() {
  var overlayProjection = this.getProjection();
  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
  var div = this.div_;
  div.style.left = sw.x + 'px';
  div.style.top = ne.y + 'px';
  div.style.width = (ne.x - sw.x) + 'px';
  div.style.height = (sw.y - ne.y) + 'px';
};

ImageOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};