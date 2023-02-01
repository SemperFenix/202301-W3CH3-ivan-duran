export abstract class Component {
  selector!: string;
  template!: string;

  render() {
    const element = document.querySelector(this.selector) as HTMLElement;
    element.insertAdjacentHTML('afterbegin', this.template);
  }
}
