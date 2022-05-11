import keyboard from '../data/data';
import Key from './Key';

class Keyboard {
  constructor() {
    this.keys = keyboard.map((item) => new Key(item));
    this.elements = {
      keysContainer: null,
      keys: this.keys.map((item) => item.render())
    };
  }

  render() {
    this.elements.keysContainer = document.createElement('div');
    this.elements.keysContainer.classList.add('keyboard');

    this.elements.keysContainer.append(...this.elements.keys);

    return this.elements.keysContainer;
  }
}

export default Keyboard;
