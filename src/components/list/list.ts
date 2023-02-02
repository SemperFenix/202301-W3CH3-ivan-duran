/* eslint-disable no-unused-vars */
import { Pet } from '../../models/pet';
import { Component } from '../component/component';
import { Item } from '../item/item';
import './list.scss';

export class PetListCreator extends Component {
  template: string;
  constructor(public selector: string, public pets: Pet[]) {
    super();
    this.template = '<ul class="pets-list">';
    this.render('afterbegin');
    this.createElement();
  }

  createElement() {
    const items: string = this.pets
      .map((item) => new Item('.pets-list', item))
      .join('');
    return `${items} </ul>`;
  }
}
