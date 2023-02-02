/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { PetListCreator } from './components/list/list';
import { mockPets } from './mock/pets';
import './index.scss';
import { Add } from './components/add/add';

new Header('.root');
new Footer('.root');
new PetListCreator('.pet-list', mockPets);
new Add('.pets-list');
