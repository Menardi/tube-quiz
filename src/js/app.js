import { LEVELS } from './levels';
import { STATIONS } from './stations';
import { storage } from './storage';
import { SvgUtils } from './SvgUtils';
import { templates } from './templates';
import { Utils } from './utils';

class App {
  constructor() {
    this.levels = LEVELS;
    this.stations = STATIONS;
    this.storage = storage;
    this.templates = templates;
    this.utils = Utils;

    this.SKIP_BUTTON_TIMEOUT = 15000;

    this.onMapReady = this.onMapReady.bind(this);
    this.onLevelSelect = this.onLevelSelect.bind(this);
    this.showSkipButton = this.showSkipButton.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.replayLevel = this.replayLevel.bind(this);

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onMouseWheel = this.onMouseWheel.bind(this);
  }

  init() {
    this.getMapFromServer();

    this.els = {
      mapContainer: document.querySelector('.tube-map-container'),
      answerInput: document.querySelector('.answer-input'),
      skipButton: document.querySelector('.skip-button'),
      currentLevelName: document.querySelector('.current-level-name'),
      currentLevelProgress: document.querySelector('.current-level-progress'),
      levelSelect: document.querySelector('.level-selection'),
      menu: document.querySelector('.menu'),
      menuOpen: document.querySelector('.menu-open'),
      menuClose: document.querySelector('.menu-close'),
      menuCloseOverlay: document.querySelector('.menu-close-overlay'),
      skipButton: document.querySelector('.skip-button'),
      countdown: document.querySelector('.next-station-countdown'),
      levelComplete: document.querySelector('.level-complete-message'),
      levelReplayButton: document.querySelector('.level-replay-button'),
      mapContainer: document.querySelector('.tube-map-container'),
      stationFact: document.querySelector('.station-fact')
    };

    this.els.answerInput.addEventListener('keydown', ev => {
      // Actually disabling the input field would cause the keyboard to go down on
      // mobile, so we do this instead.
      if(ev.target.classList.contains('disabled')) {
        ev.preventDefault();
      }
    });

    this.els.answerInput.addEventListener('input', ev => this.onGuessInput(ev));
    this.els.skipButton.addEventListener('click', ev => {
      ev.preventDefault();
      this.revealAnswer(false);
    });
    this.els.menuOpen.addEventListener('click', this.openMenu);
    this.els.menuClose.addEventListener('click', this.closeMenu);
    this.els.levelReplayButton.addEventListener('click', this.replayLevel);

    this.els.mapContainer.addEventListener('touchstart', this.onTouchStart);
    this.els.mapContainer.addEventListener('mousedown', this.onTouchStart);
    this.els.mapContainer.addEventListener('touchend', this.onTouchEnd);
    this.els.mapContainer.addEventListener('mouseup', this.onTouchEnd);
    this.els.mapContainer.addEventListener('mouseleave', this.onTouchEnd);
    this.els.mapContainer.addEventListener('touchmove', this.onTouchMove);
    this.els.mapContainer.addEventListener('mousemove', this.onTouchMove);
    this.els.mapContainer.addEventListener('wheel', this.onMouseWheel);

    this.populateMenu();
  }

  onGuessInput(ev) {
    const typedGuess = ev.target.value;
    const normalisedGuess = this.utils.normaliseAnswer(typedGuess);
    const normalisedAnswer = this.utils.normaliseAnswer(this.currentStation.name);

    if(normalisedGuess === normalisedAnswer) {
      this.revealAnswer(true);
    }
  }

  revealAnswer(wasGuessed) {
    this.svgUtils.revealFocusedEl();

    this.els.answerInput.value = this.currentStation.name;
    this.els.answerInput.classList.add('disabled');
    if(wasGuessed) this.els.answerInput.classList.add('correct');

    if(this.currentStation.passengers) {
      this.els.stationFact.innerHTML = `Passengers in 2016: ${this.currentStation.passengers.toFixed(1)}m`;
      this.els.stationFact.style.display = '';
    } else {
      this.els.stationFact.style.display = 'none';
    }

    this.hideSkipButton();

    let countdown = 3;
    this.els.countdown.innerHTML = countdown;
    this.els.countdown.style.display = '';
    const countdownInterval = setInterval(() => {
      this.els.countdown.innerHTML = --countdown;
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);

      this.els.countdown.style.display = 'none';
      this.els.answerInput.classList.remove('correct', 'disabled');

      this.nextStation();
    }, 3000);

    const timeTaken = Date.now() - this.stationShownTime;
    this.storage.incrementCurrentLevelProgress({
      correct: wasGuessed,
      time: timeTaken
    });
  }

  nextStation() {
    const levelId = this.storage.getCurrentLevelId();
    const level = this.levels[levelId];
    const selectedLevelIndex = this.storage.getCurrentLevelProgress();

    this.els.menu.querySelector(`.line-${levelId}`).innerHTML = this.templates.levelName(level.id);

    if(selectedLevelIndex >= level.stations.length) {
      this.onLevelComplete();
      return;
    }

    const stationCode = level.stations[selectedLevelIndex];
    this.currentStation = this.stations[stationCode];

    this.viewBoxPadding = this.DEFAULT_VIEWBOX_PADDING;
    this.focusStation(stationCode);

    this.stationShownTime = Date.now();

    this.els.answerInput.value = '';
    this.els.currentLevelName.innerHTML = level.name;
    this.els.currentLevelProgress.innerHTML = this.templates.levelProgress(level.id);
    this.els.levelComplete.style.display = 'none';
    this.els.stationFact.style.display = 'none';

    this.hideSkipButton();
    this.skipButtonTimeout = setTimeout(this.showSkipButton, this.SKIP_BUTTON_TIMEOUT);
  }

  onLevelComplete() {
    const levelId = this.storage.getCurrentLevelId();
    this.storage.markLevelCompleted(levelId);
    this.els.levelComplete.style.display = '';
    this.els.answerInput.blur();

    document.querySelector('.level-complete-table-container').innerHTML = this.templates.stats(levelId);
  }

  replayLevel() {
    this.storage.resetLevelProgress(this.storage.getCurrentLevelId());
    this.nextStation();
  }

  getMapFromServer() {
    const mapXhr = new XMLHttpRequest;
    mapXhr.onload = (ev) => {
      const svgText = ev.target.responseText.replace('</svg>', `${this.templates.blackoutRectSvg()}</svg>`);
      this.els.mapContainer.innerHTML = svgText;

      window.requestAnimationFrame(this.onMapReady);
    }
    mapXhr.open('GET', 'img/tube-map.svg', true);
    mapXhr.send();
  }

  onMapReady() {
    this.els.mapSvg = document.querySelector('.tube-map');

    this.svgUtils = new SvgUtils(this.els.mapSvg);

    this.nextStation();
  }

  onTouchStart(ev) {
    this.lastTouch = this.getTouchCoords(ev);
  }

  onTouchEnd(ev) {
    if(ev.type.includes('mouse') || ev.touches.length === 0) {
      this.lastTouch = null;
    } else if(ev.touches.length === 1) {
      this.lastTouch = ev.touches[0];
    }

    this.lastDistance = null;
  }

  onTouchMove(ev) {
    ev.preventDefault();

    if(this.moveFrame) window.cancelAnimationFrame(this.moveFrame);

    const touch = this.getTouchCoords(ev);

    this.moveFrame = window.requestAnimationFrame(() => {
      this.moveFrame = null;

      const viewbox = this.els.mapSvg.getAttribute('viewBox').split(' ').map(v => parseFloat(v, 10));

      if(ev.type === 'mousemove' || ev.touches.length === 1) {
        if(!this.lastTouch) return;

        // Map the touch movements to the SVG's viewBox. The ratio to use depends on whether
        // the SVG is displaying in portrait or landscape.
        let touchToViewboxRatio;

        // Using the map container's width rather than the SVG itself because on Firefox,
        // svg.clientWidth and .clientHeight are both returned as 0.
        if(this.els.mapContainer.clientHeight > this.els.mapContainer.clientWidth) {
          touchToViewboxRatio = this.els.mapContainer.clientWidth / viewbox[2];
        } else {
          touchToViewboxRatio = this.els.mapContainer.clientHeight / viewbox[3];
        }

        const xDiff = (this.lastTouch.clientX - touch.clientX) / touchToViewboxRatio;
        const yDiff = (this.lastTouch.clientY - touch.clientY) / touchToViewboxRatio;

        this.svgUtils.setViewBox({x: viewbox[0] + xDiff, y: viewbox[1] + yDiff, width: viewbox[2], height: viewbox[3]});
      } else if(ev.touches.length === 2) {
        const a = (ev.touches[0].clientX - ev.touches[1].clientX);
        const b = (ev.touches[0].clientY - ev.touches[1].clientY);
        const distance = Math.sqrt(a*a + b*b)

        if(this.lastDistance) {
          const distanceDiff = this.lastDistance - distance;
          this.svgUtils.zoomViewbox(distanceDiff);
        }

        this.lastDistance = distance;
      }

      this.lastTouch = touch;
    });
  }

  onMouseWheel(ev) {
    let change = 20;
    if(ev.deltaY < 0) change = change * -1;

    this.svgUtils.zoomViewbox(change);
  }

  // Handles both touch and mouse events
  getTouchCoords(ev) {
    if(ev.touches) {
      return {
        clientX: ev.touches[0].clientX,
        clientY: ev.touches[0].clientY
      }
    } else {
      return {
        clientX: ev.clientX,
        clientY: ev.clientY
      };
    }
  }

  focusStation(code) {
    const station = this.stations[code];

    this.svgUtils.focusEl(`#${station.domId}`);
  }

  onLevelSelect(ev) {
    const levelId = ev.currentTarget.getAttribute('level-id');
    this.storage.setCurrentLevel(levelId);

    document.querySelector('.select-line.selected').classList.remove('selected');
    ev.currentTarget.classList.add('selected');

    this.nextStation();
    this.closeMenu();
  }

  populateMenu() {
    this.els.levelSelect.innerHTML = this.templates.menu();

    const lines = Array.from(document.querySelectorAll('.select-line'));
    lines.forEach(line => line.addEventListener('click', this.onLevelSelect));
  }

  openMenu() {
    this.els.menu.classList.add('open');
    this.els.menuCloseOverlay.style.display = '';
  }

  closeMenu() {
    this.els.menu.classList.remove('open');
    this.els.menuCloseOverlay.style.display = 'none';
  }

  showSkipButton() {
    this.els.skipButton.classList.add('shown');
  }

  hideSkipButton() {
    if(this.skipButtonTimeout) {
      clearTimeout(this.skipButtonTimeout);
    }

    if(this.els.skipButton.classList.contains('shown')) {
      this.els.skipButton.classList.add('finishing');
    }

    setTimeout(() => {
      this.els.skipButton.classList.remove('shown', 'finishing');
    }, 500);
  }

}

window.app = new App();

document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});