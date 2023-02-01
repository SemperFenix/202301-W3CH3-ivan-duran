/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render();
  }

  private createTemplate() {
    // La hacemos de uso interno con la etiqueta private
    return `
    <header class ="header">
      <h1>¡Adopta una mascota!</h1>
      <p></p>
    </header>`;
  }
}
