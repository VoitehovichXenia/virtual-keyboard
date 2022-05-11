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
    this.cursorPos = 0;
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

    el.textArea.addEventListener('click', () => {
      this.cursorPos = this.elements.textArea.selectionStart;
    });

    el.wrapper = document.createElement('div');
    el.wrapper.classList.add('wrapper');

    this.keyboard = new Keyboard();
    el.keyboardElement = this.keyboard.render();

    el.keyboardElement.addEventListener('mousedown', event => {
      const code = +event.target.id;
      const keysArr = this.keyboard.keys;
      const type = event.target.getAttribute('data-type');
      const key = keysArr.find(item => {
        if (type) return item.keyCode === code && item.type === type;
        return item.keyCode === code;
      });

      if (key) {
        key.highlight();

        if (key.keyCode === 8) {
          this.backspace();
          return;
        }
        if (key.keyCode === 46) {
          this.delete();
          return;
        }
        if (key.keyCode === 20) {
          this.isCapsLockPressed = !this.isCapsLockPressed;
          this.toggleCapsLock();
          key.element.classList.toggle('caps-lock_active');
        } else if (key.keyCode === 16) {
          this.isShiftPressed = true;
          keysArr.forEach(item => item.showSecondValue());
        } else if (key.keyCode === 17 && key.type === 'left') {
          this.isCtrlPressed = !this.isCtrlPressed;
          if (this.isCtrlPressed && this.isAltPressed) {
            this.changeLangHandler();
            this.isAltPressed = false;
            this.isCtrlPressed = false;
          }
        } else if (key.keyCode === 18 && key.type === 'left') {
          this.isAltPressed = !this.isAltPressed;
          if (this.isCtrlPressed && this.isAltPressed) {
            this.changeLangHandler();
            this.isAltPressed = false;
            this.isCtrlPressed = false;
          }
        }

        if (key.value) this.addSymbol(key.element.value, this.cursorPos);
      }
    });

    el.keyboardElement.addEventListener('mouseup', event => {
      const code = +event.target.id;
      const keysArr = this.keyboard.keys;
      const type = event.target.getAttribute('data-type');
      const key = keysArr.find(item => {
        if (type) return item.keyCode === code && item.type === type;
        return item.keyCode === code;
      });

      if (key) {
        if (key.keyCode === 8) {
          this.setCaretPosition(this.cursorPos);
          key.removeHighlight();
          return;
        }
        if (key.keyCode === 46) {
          this.setCaretPosition(this.cursorPos);
          key.removeHighlight();
          return;
        }
        if (key.keyCode === 16) {
          keysArr.forEach(item => item.showInitialValue());
          this.isShiftPressed = false;
          key.removeHighlight();
          this.setCaretPosition(this.cursorPos);
          return;
        }
        if (key.keyCode === 18 && key.type === 'left') {
          if (!this.isAltPressed) key.removeHighlight();
          if (!this.isCtrlPressed) {
            let ctrl = this.keyboard.keys.find(item => item.keyCode === 17 && item.type === 'left');
            ctrl.removeHighlight();
          }
          this.setCaretPosition(this.cursorPos);
          return;
        }
        if (key.keyCode === 17 && key.type === 'left') {
          if (!this.isCtrlPressed) key.removeHighlight();
          if (!this.isAltPressed) {
            let alt = this.keyboard.keys.find(item => item.keyCode === 18 && item.type === 'left');
            alt.removeHighlight();
          }
          this.setCaretPosition(this.cursorPos);
          return;
        }
        if (key.keyCode === 18 || key.keyCode === 17) {
          key.removeHighlight();
          this.setCaretPosition(this.cursorPos);
          return;
        }

        key.removeHighlight();
        this.setCaretPosition(this.cursorPos + 1);
      }
    });

    window.addEventListener('keydown', event => {
      event.preventDefault();

      const code = event.keyCode;
      const keysArr = this.keyboard.keys;
      const type = event.code.toLowerCase();
      const key = keysArr.find(item => {
        if (code === 18 || code === 17 || code === 16) {
          return item.keyCode === code && type.indexOf(item.type) >= 0;
        }
        return item.keyCode === code;
      });

      if (key) {
        key.highlight();

        if (key.keyCode === 8) {
          this.backspace();
          this.setCaretPosition(this.cursorPos);
          return;
        }
        if (key.keyCode === 46) {
          this.delete();
          this.setCaretPosition(this.cursorPos);
          return;
        }
        if (key.keyCode === 20) {
          this.isCapsLockPressed = !this.isCapsLockPressed;
          this.toggleCapsLock();
          key.element.classList.toggle('caps-lock_active');
          return;
        }
        if (key.keyCode === 16) {
          this.isShiftPressed = true;
          keysArr.forEach(item => item.showSecondValue());
          return;
        }
        if (key.keyCode === 17 && key.type === 'left') {
          this.isCtrlPressed = true;
          if (this.isCtrlPressed && this.isAltPressed) this.changeLangHandler();
          return;
        }
        if (key.keyCode === 18 && key.type === 'left') {
          this.isAltPressed = true;
          if (this.isCtrlPressed && this.isAltPressed) this.changeLangHandler();
          return;
        }
        if (key.keyCode === 18 || key.keyCode === 17) {
          this.setCaretPosition(this.cursorPos);
          return;
        }

        if (key.value) this.addSymbol(key.element.value, this.cursorPos);
        this.setCaretPosition(this.cursorPos + 1);
      }
    });

    window.addEventListener('keyup', event => {
      const code = event.keyCode;
      const keysArr = this.keyboard.keys;
      const type = event.code.toLowerCase();
      const key = keysArr.find(item => {
        if (code === 18 || code === 17 || code === 16) {
          return item.keyCode === code && type.indexOf(item.type) >= 0;
        }
        return item.keyCode === code;
      });

      if (key) {
        if (key.keyCode === 16) {
          keysArr.forEach(item => item.showInitialValue());
          this.isShiftPressed = false;
        } else if (key.keyCode === 18 && key.type === 'left') {
          this.isAltPressed = false;
        } else if (key.keyCode === 17 && key.type === 'left') {
          this.isCtrlPressed = false;
        }

        key.removeHighlight();
      }
    });

    el.wrapper.append(el.textArea, el.keyboardElement);
    document.body.append(el.heading, el.subtitle, el.wrapper);
  }

  addSymbol(symbol, position) {
    if (!position || position === this.elements.textArea.textContent.length) {
      this.elements.textArea.textContent += symbol;
    } else {
      let before = this.elements.textArea.textContent.slice(0, position);
      let after = this.elements.textArea.textContent.slice(position);

      this.elements.textArea.textContent = before + symbol + after;
    }
  }

  backspace() {
    const textArea = this.elements.textArea;
    const cursorPosition = this.cursorPos;

    if (cursorPosition) {
      textArea.textContent = textArea.textContent.slice(0, cursorPosition - 1)
       + textArea.textContent.slice(cursorPosition);
      this.cursorPos -= 1;
    } else {
      this.cursorPos = 0;
    }
  }

  delete() {
    const textArea = this.elements.textArea;
    let cursorPosition = this.cursorPos;
    const length = textArea.textContent.length;

    if (cursorPosition !== length - 1) {
      textArea.textContent = textArea.textContent.slice(0, cursorPosition)
      + textArea.textContent.slice(cursorPosition + 1);
    } else {
      textArea.textContent = textArea.textContent.slice(0, length - 1);
    }
  }

  toggleCapsLock() {
    if (this.isCapsLockPressed) {
      this.keyboard.keys.forEach(item => item.makeCaps());
      localStorage.setItem('capsed', JSON.stringify(this.isCapsLockPressed));
    } else {
      this.keyboard.keys.forEach(item => item.makeLower());
      localStorage.setItem('capsed', JSON.stringify(this.isCapsLockPressed));
    }
  }

  changeLangHandler() {
    const keysArr = this.keyboard.keys;
    this.language = this.language === 'en' ? 'ru' : 'en';

    keysArr.forEach(item => {
      item.changeLang(this.language);
      if (this.isCapsLockPressed) {
        item.makeCaps();
      }
    });

    localStorage.setItem('lang', this.language);
  }

  setCaretPosition(newPosition) {
    this.cursorPos = newPosition;
    this.elements.textArea.focus();
    this.elements.textArea.selectionStart = newPosition;
  }
}

export default App;
