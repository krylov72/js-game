export class Google {
  #position;
  constructor(position) {
    this.#position = position;
  }

  set position(position) {
    this.#position = position;
  }

  get position() {
    return this.#position;
  }
}
