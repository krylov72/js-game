import { Google } from "./google";
import { NumberUtils } from "./numberUtils";
import { Player } from "./player";
import { Position } from "./position";

export class Game {
  #settings = {
    gridSize: {
      columns: 1,
      rows: 1,
    },
  };
  #status = "pending";
  #player1;
  #player2;
  #google;

  #getRandomPosition(position = []) {
    let newX;
    let newY;

    do {
      newX = NumberUtils.getRandomNumber(this.#settings.gridSize.columns);
      newY = NumberUtils.getRandomNumber(this.#settings.gridSize.rows);
    } while (position.some((pos) => pos.x === newX && pos.y === newY));
    return new Position(newX, newY);
  }
  start() {
    if (this.#status === "pending") {
      this.#status = "in-progress";
    }

    const player1Pos = this.#getRandomPosition();
    this.#player1 = new Player(1, player1Pos);
    const player2pos = this.#getRandomPosition([player1Pos]);
    this.#player2 = new Player(2, player2pos);

    const googlePos = this.#getRandomPosition([player1Pos, player2pos]);
    this.#google = new Google(googlePos);
  }

  set settings(settings) {
    this.#settings = settings;
  }

  get settings() {
    return this.#settings;
  }

  set status(status) {
    this.#status = status;
  }

  get status() {
    return this.#status;
  }

  get player1() {
    return this.#player1;
  }

  get player2() {
    return this.#player2;
  }

  get google() {
    return this.#google;
  }
}
