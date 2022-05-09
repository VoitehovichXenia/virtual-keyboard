import Keyboard from './Keyboard';

class App {
  constructor() {
    this.elements = {
      heading: null,
      subtitle: null,
      textArea: null,
      keyboardElement: null,
      wrapper: null
    };

    this.keyboard = null;
  }

  renderMainPage() {
    const el = this.elements;

    el.heading = document.createElement('h1');
    el.heading.textContent = 'Virtual keyboard for Windows OS';
    el.heading.classList.add('heading');

    el.subtitle = document.createElement('h3');
    el.subtitle.textContent = 'Press left ctrl + alt to switch language';
    el.subtitle.classList.add('subtitle');

    el.textArea = document.createElement('textarea');
    el.textArea.id = 'area';
    el.textArea.autofocus = true;
    el.textArea.placeholder = 'Start typing here';

    el.wrapper = document.createElement('div');
    el.wrapper.classList.add('wrapper');

    this.keyboard = new Keyboard();
    el.keyboardElement = this.keyboard.render();

    el.keyboardElement.addEventListener('mousedown', event => {
      const code = +event.target.id;
      const key = this.keyboard.keys.find(item => item.keyCode === code);
      if (key) key.highlight();
      if (key.value) this.addSymbol(key.element.value, this.cursorPos);
    });

    el.keyboardElement.addEventListener('mouseup', event => {
      const code = +event.target.id;
      const key = this.keyboard.keys.find(item => item.keyCode === code);
      if (key) key.removeHighlight();
    });

    window.addEventListener('keydown', event => {
      const code = +event.target.id;
      const key = this.keyboard.keys.find(item => item.keyCode === code);
      if (key) key.highlight();
      if (key.value) this.addSymbol(key.element.value, this.cursorPos);
    });

    window.addEventListener('keyup', event => {
      const key = this.keyboard.keys.find(item => item.keyCode === event.keyCode);
      key.removeHighlight();
    });

    el.wrapper.append(el.textArea, el.keyboardElement);
    document.body.append(el.heading, el.subtitle, el.wrapper);
  }
}

export default App;
