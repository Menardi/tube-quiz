class Storage {
  constructor() {
    const progress = localStorage.progress;

    if(progress) {
      this._progress = JSON.parse(progress);
    } else {
      this._progress = {
        currentLevelId: 'popularity',
        levels: {}
      }
    }
  }

  getCurrentLevelId() {
    return this._progress.currentLevelId;
  }

  setCurrentLevel(levelId) {
    this._progress.currentLevelId = levelId;
    this._persistProgress();
  }

  getCurrentLevelProgress() {
    return this.getLevelProgress(this.getCurrentLevelId());
  }

  getLevelProgress(levelId) {
    const level = this._progress.levels[levelId];
    return level ? level.currentIndex : 0;
  }

  getLevelAnswered(levelId) {
    const level = this._progress.levels[levelId];
    if(level) {
      return level.answered;
    } else {
      return [];
    }
  }

  setCurrentLevelProgress(index, data) {
    const currentLevelId = this.getCurrentLevelId();
    if(!this._progress.levels[currentLevelId]) {
      this._progress.levels[currentLevelId] = {
        answered: []
      }
    }

    this._progress.levels[currentLevelId].currentIndex = index;
    this._progress.levels[currentLevelId].answered[index - 1] = data;
    this._persistProgress();
  }

  incrementCurrentLevelProgress(data) {
    this.setCurrentLevelProgress(this.getCurrentLevelProgress() + 1, data);
  }

  markLevelCompleted(levelId) {
    this._progress.levels[levelId].complete = true;
    this._persistProgress();
  }

  isLevelCompleted(levelId) {
    const level = this._progress.levels[levelId];

    if(level) {
      return level.complete;
    } else {
      return false;
    }
  }

  resetLevelProgress(levelId) {
    this._progress.levels[levelId].currentIndex = 0;
    this._persistProgress();
  }

  _persistProgress() {
    localStorage.progress = JSON.stringify(this._progress);
  }
}

const storage = new Storage();

export { storage }