// ton code ici (ps, efface cette ligne stp)
export default class Header {
  constructor(element) {
    this.element = element;
    //console.log('constructor');

    this.html = document.documentElement;

    this.init();
  }

  init() {
    this.initNavMobile();
  }

  // activation du menu mobile
  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    //console.log(toggle);
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}
