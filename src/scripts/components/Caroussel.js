export default class Caroussel {
  constructor(element) {
    this.element = element;

    this.options = {
      repeat: true,
    };
    this.init();
  }

  init() {
    this.setOptions();

    // Suite du code
  }

  setOptions() {
    // Ici, on va lire les attributs data propres à
    // l'instance (this.element) et on va modifier
    // l'objet d'options au besoin
  }
}
