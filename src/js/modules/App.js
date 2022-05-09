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

    el.wrapper.append(el.textArea, el.keyboardElement);

    document.body.append(el.heading, el.subtitle, el.wrapper);
  }
}

export default App;
