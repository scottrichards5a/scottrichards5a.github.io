function selectDate(hashDate) {
  $("ul#dates>li>div.selected").removeClass("selected")
  $("ul#dates div:has(a[href='" + hashDate + "'])").addClass("selected")
  var overlayData = dateOverlays.get(parseInt(hashDate.replace("#", "")))
  if (overlayData && overlayData.img) {
    overlay = new ImageOverlay(overlayData.bounds, overlayData.img, map)
  }
}