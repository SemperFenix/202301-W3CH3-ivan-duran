/* eslint-disable no-unused-vars */
import { Pet } from '../../models/pet';
import { Component } from '../component/component';

export class Item extends Component {
  constructor(public selector: string, public pet: Pet) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `<li>
          <img src="assets/img/${this.pet.name}.jpg" width="300px">
          <div><span class = "bold">Nombre:</span> ${this.pet.name}.</div>
          <div><span class = "bold">Raza:</span> ${this.pet.specie}.</div>
          <div><span class = "bold">Dueño:</span> ${this.pet.owner}.</div>
          </li>`;
  }
}
