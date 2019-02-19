class SvgUtils {

  constructor(svgEl) {
    this.el = svgEl;

    this.viewBoxPadding = 60;

    this.MIN_VIEWBOX_WIDTH = 50;
    this.MAX_VIEWBOX_WIDTH = 300;
  }

  focusEl(domId) {
    const containerEl = this.el.querySelector(domId);
    let areaToZoom = containerEl;

    // The id may reference the overall group - if so, find the corrext text box
    if(!areaToZoom.transform.baseVal.numberOfItems) {
      areaToZoom = areaToZoom.querySelector('text[transform]');
    }

    const textArea = areaToZoom.transform.baseVal.getItem(0);
    const offsetX = textArea.matrix.e;
    const offsetY = textArea.matrix.f;

    // The SVG scales to 100% width, so the station position is most likely off.
    // We would prefer to know how far it is from the edge of its box, g
    let areaToZoomBBox = areaToZoom.getBBox();

    // Calculate the width and height of the viewbox
    const isMultiline = !!areaToZoom.querySelector('tspan');
    let viewBox = {
      x: Math.round(areaToZoomBBox.x + offsetX - this.viewBoxPadding),
      y: Math.round(areaToZoomBBox.y + offsetY - this.viewBoxPadding),
      width: Math.round(areaToZoomBBox.width + (this.viewBoxPadding * 2)),
      height: Math.round(areaToZoomBBox.height + (this.viewBoxPadding * 2))
    };

    // Place a blue rectangle over where the station name would be
    const blackoutRect = this.el.querySelector('.blackout-rect');
    blackoutRect.setAttribute('opacity', '1')
    blackoutRect.setAttribute('transform', `matrix(1 0 0 1 ${offsetX} ${offsetY - areaToZoomBBox.height / (isMultiline ? 2 : 1)})`);
    blackoutRect.setAttribute('width', areaToZoomBBox.width);
    blackoutRect.setAttribute('height', areaToZoomBBox.height);

    // Set the viewbox
    const viewboxVal = this.setViewBox(viewBox);
    this.el.setAttribute('originalViewBox', viewboxVal);

    // Remove the underline from any previously revealed answer
    const revealedPath = this.el.querySelector('.revealed-path');
    if(revealedPath) revealedPath.classList.remove('revealed-path');

    // Change the silhouette
    const activePath = this.el.querySelector('.active-path');
    if(activePath) activePath.classList.remove('active-path');
    containerEl.classList.add('active-path');
  }

  revealFocusedEl() {
    this.el.querySelector('.blackout-rect').setAttribute('opacity', 0);
    const activePath = this.el.querySelector('.active-path');
    if(activePath) {
      activePath.classList.remove('active-path');
      activePath.classList.add('revealed-path');
    }
  }

  setViewBox(viewboxObj) {
    let { x, y, width, height } = viewboxObj;

    if(x < 10) x = 10;
    if(x > 900) x = 900;

    if(y < 20) y = 20;
    if(y > 800) y = 800;

    if(width < this.MIN_VIEWBOX_WIDTH) width = this.MIN_VIEWBOX_WIDTH;
    if(width > this.MAX_VIEWBOX_WIDTH) width = this.MAX_VIEWBOX_WIDTH;

    if(height < this.MIN_VIEWBOX_WIDTH) height = this.MIN_VIEWBOX_WIDTH;
    if(height > this.MAX_VIEWBOX_WIDTH) height = this.MAX_VIEWBOX_WIDTH;

    const viewboxStr = `${x} ${y} ${width} ${height}`;
    this.el.setAttribute('viewBox', viewboxStr);

    return viewboxStr;
  }

  zoomViewbox(change) {
    const viewbox = this.el.getAttribute('viewBox').split(' ').map(v => parseFloat(v, 10));
    const width = viewbox[2] + change;
    const height = viewbox[3] + change;

    // If we hit the max widths, and keep changing x and y, the map will start
    // panning instead of zooming.
    if(width > this.MIN_VIEWBOX_WIDTH && height > this.MIN_VIEWBOX_WIDTH
      && width < this.MAX_VIEWBOX_WIDTH && height < this.MAX_VIEWBOX_WIDTH) {
      this.setViewBox({x: viewbox[0] - change/2, y: viewbox[1] - change/2, width, height});
    }
  }
}

export { SvgUtils }