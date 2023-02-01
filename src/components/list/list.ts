/* eslint-disable no-unused-vars */
import { Pet } from '../../models/pet';
import { Component } from '../component/component';
import { Item } from '../item/item';
import './list.scss';

export class PetListCreator extends Component {
  constructor(public selector: string, public pets: Pet[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    const items = this.pets
      .map((item) => new Item('.list-pets', item))
      .join('\n');
    return `  <ul class="pets-list">  ${items} </ul>
    `;
  }
}
