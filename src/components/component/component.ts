export abstract class Component {
  selector!: string;
  template!: string;

  render(place: globalThis.InsertPosition) {
    const element = document.querySelector(this.selector) as HTMLElement;
    element.insertAdjacentHTML(place, this.template);
  }
}
