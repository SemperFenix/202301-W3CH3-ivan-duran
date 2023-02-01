/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Item } from './components/item/item';
import { PetListCreator } from './components/list/list';
import { mockPets } from './mock/pets';
import './index.scss';
new Header('.root');
new Footer('.root');
new PetListCreator('.pet-list', mockPets);
// New Item('.root', mockPets[0]);
