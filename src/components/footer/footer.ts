/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    // La hacemos de uso interno con la etiqueta private
    return `
    <footer class ="footer">
      <address>Contacta con nosotros en el 555-965-874</address>
    </footer>`;
  }
}
