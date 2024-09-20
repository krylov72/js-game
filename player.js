export class Player {
  #position;
  #id;
  constructor(id, position) {
    this.#position = position;
    this.#id = id;
  }

  set position(position) {
    this.#position = position;
  }

  get position() {
    return this.#position;
  }
}
