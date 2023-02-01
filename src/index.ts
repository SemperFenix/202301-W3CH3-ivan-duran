/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { PetListCreator } from './components/list/list';
import { mockPets } from './mock/pets';

new Header('.root');
new PetListCreator('.pet-list', mockPets);
new Footer('.root');
