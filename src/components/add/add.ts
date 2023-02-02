/* eslint-disable no-unused-vars */
import { Pet } from '../../models/pet';
import { Component } from '../component/component';
import { Item } from '../item/item';
import './add.scss';
export class Add extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
    this.addEventListeners();
  }

  createTemplate() {
    return `<form role="presentation" action="">
              <p>Añade tu mascota</p>
              <ul>
                <li><label for="Name">Nombre<input type="text" id="Name"></label></li>
                <li><label for="Specie">Especie<input type="text" id="Specie"></label></li>
                <li><label for="Owner">Dueño<input type="text" id="Owner"></label></li>
                <input type="button" id="Send" value="Send">
              </ul>
            </form>`;
  }

  addEventListeners() {
    const petName = document.querySelector('#Name') as HTMLInputElement;
    const petSpecie = document.querySelector('#Specie') as HTMLInputElement;
    const petOwner = document.querySelector('#Owner') as HTMLInputElement;

    const button = document.querySelector('#Send');
    button?.addEventListener('click', () => {
      // eslint-disable-next-line no-new
      new Item(
        '.pets-list',
        new Pet(petName?.value, petSpecie?.value, petOwner?.value)
      );
      petName.value = '';
      petSpecie.value = '';
      petOwner.value = '';
    });

    petOwner?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        // eslint-disable-next-line no-new
        new Item(
          '.pets-list',
          new Pet(petName.value, petSpecie.value, petOwner.value)
        );
        petName.value = '';
        petSpecie.value = '';
        petOwner.value = '';
      }
    });
  }
}
