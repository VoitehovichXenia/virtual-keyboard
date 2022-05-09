class Key {
  constructor(obj) {
    this.keyCode = obj.keyCode;
    this.name = obj.name || null;
    this.value = obj.value || null;
    this.secondValue = obj.secondValue || null;

    this.ru = obj.ru || null;
    this.en = obj.en || null;
    this.language = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';

    this.type = obj.type || null;

    this.isCapsed = null;
    this.element = null;
    this.state = 'initial';
  }

  init() {
    if (this.language === 'en' && this.en) {
      this.name = this.en.name;
      this.value = this.en.value;
      this.secondValue = this.en.secondValue;
      this.isCapsed = !!this.en.isCapsed;
    }
    if (this.language === 'ru' && this.ru) {
      this.name = this.ru.name;
      this.value = this.ru.value;
      this.secondValue = this.ru.secondValue;
      this.isCapsed = !!this.ru.isCapsed;
    }
  }

  render() {
    this.init(this.language);

    this.element = document.createElement('button');
    this.element.classList.add('key');
    this.element.id = this.keyCode;

    if (this.type) this.element.dataset.type = this.type;

    switch (this.name) {
      case 'backspace':
      case 'tab':
      case 'enter':
      case 'space':
      case 'del':
        this.element.classList.add(this.name);
        break;
      case '\\':
        this.element.classList.add('dash');
        break;
      case 'caps lock':
        this.element.classList.add('caps-lock');
        break;
      case 'shift':
        if (this.type === 'left') this.element.classList.add('l-shift');
        if (this.type === 'right') this.element.classList.add('r-shift');
        break;
      case 'ctrl':
        if (this.type === 'left') this.element.classList.add('l-ctrl');
        if (this.type === 'right') this.element.classList.add('r-ctrl');
        break;
      case 'alt':
        if (this.type === 'left') this.element.classList.add('l-alt');
        if (this.type === 'right') this.element.classList.add('r-alt');
        break;
      default:
        break;
    }

    this.element.value = this.value;
    this.element.textContent = this.name;

    return this.element;
  }
}

export default Key;
