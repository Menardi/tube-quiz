import { LEVELS } from './levels';
import { STATIONS } from './stations';
import { storage } from './storage';

class Templates {

  constructor() {
    this.levels = LEVELS;
    this.stations = STATIONS;
    this.storage = storage;
  }

  menu() {
    const levelKeys = Object.keys(this.levels);

    let menuHtml = '';

    levelKeys.forEach(key => {
      const level = this.levels[key];
      const isSelectedLevel = this.storage.getCurrentLevelId() === level.id;
      const isCompleted = this.storage.isLevelCompleted(level.id);

      menuHtml += `<li><a href="javascript:void(0)" level-id="${level.id}"
          class="line-${level.id} select-line
            ${isSelectedLevel ? 'selected' : ''}
            ${isCompleted ? 'complete' : ''}
          ">
          ${this.levelName(level.id)}
        </a></li>`;
    });

    return menuHtml;
  }

  stats(levelId) {
    const level = this.levels[levelId];
    const answered = this.storage.getLevelAnswered(levelId);

    let stats = {
      slowestCorrect: {station: 'None', time: 0},
      slowestSkipped: {station: 'None', time: 0},
      fastestCorrect: {station: 'None', time: Infinity},
      fastestSkipped: {station: 'None', time: Infinity},
      correct: 0,
      skipped: 0
    };

    answered.forEach((answer, index) => {
      const stationCode = level.stations[index];
      const station = this.stations[stationCode];

      if(answer.correct) {
        stats.correct++;

        if(answer.time < stats.fastestCorrect.time) {
          stats.fastestCorrect = { time: answer.time, station: station.name };
        }

        if(answer.time > stats.slowestCorrect.time) {
          stats.slowestCorrect = { time: answer.time, station: station.name };
        }
      } else {
        if(answer.time < stats.fastestSkipped.time) {
          stats.fastestSkipped = { time: answer.time, station: station.name };
        }

        if(answer.time > stats.slowestSkipped.time) {
          stats.slowestSkipped = { time: answer.time, station: station.name };
        }

        stats.skipped++;
      }
    });

    const statsHtml =
      `<table class="complete-stats">
        <tr>
          <th>Total Correct</th>
          <td class="stats-correct">${stats.correct}</td>
        </tr>
        <tr>
          <th>Fastest Correct</th>
          <td class="stats-fastest">
            ${stats.fastestCorrect.station}
            ${stats.fastestCorrect.time !== Infinity ? (stats.fastestCorrect.time / 1000).toFixed(1) + 's' : '' }
          </td>
        </tr>
        <tr>
          <th>Slowest Correct</th>
          <td class="stats-slowest">
            ${stats.slowestCorrect.station}
            ${stats.slowestCorrect.time !== 0 ? (stats.slowestCorrect.time / 1000).toFixed(1) + 's' : '' }
          </td>
        </tr>
        <tr>
          <th>Total Skipped</th>
          <td class="stats-skipped">${stats.skipped}</td>
        </tr>
        <tr>
          <th>Fastest Skip</th>
          <td class="fastest-skip">
            ${stats.fastestSkipped.station}
            ${stats.fastestSkipped.time !== Infinity ? (stats.fastestSkipped.time / 1000).toFixed(1) + 's' : '' }
          </td>
        </tr>
        <tr>
          <th>Slowest Skip</th>
          <td class="slowest-skip">
            ${stats.slowestSkipped.station}
            ${stats.slowestSkipped.time !== 0 ? (stats.slowestSkipped.time / 1000).toFixed(1) + 's' : '' }
          </td>
        </tr>
      </table>`;

    return statsHtml;
  }

  levelName(levelId) {
    const level = this.levels[levelId];
    return `<span class="level-name">${level.name}</span>
      <span class="level-progress">${this.levelProgressPercent(levelId)}</span>`;
  }

  levelProgress(levelId) {
    const level = this.levels[levelId];
    const levelProgress = this.storage.getLevelProgress(level.id);
    return `${levelProgress + 1} / ${level.stations.length}`;
  }

  levelProgressPercent(levelId) {
    const level = this.levels[levelId];
    const levelProgress = this.storage.getLevelProgress(level.id);
    const percent = (levelProgress / level.stations.length) * 100;
    return `${percent.toFixed()}%`;
  }

  blackoutRectSvg() {
    return '<rect class="blackout-rect" transform="matrix(1 0 0 1 0 0)" width="0" height="0" rx="1" ry="1"></rect>';
  }

}

const templates = new Templates();

export { templates }