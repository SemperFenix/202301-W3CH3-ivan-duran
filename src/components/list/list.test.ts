import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Pet } from '../../models/pet';
import { PetListCreator } from './list';

describe('Given the List class', () => {
  describe('When passed the parameters', () => {
    test('Then it should renderize the content', () => {
      document.body.innerHTML = '<slot></slot>';
      const mockPets: Pet[] = [
        new Pet('Txica', 'Perro común'),
        new Pet('Mellow', 'Gato común'),
        new Pet('Esmeralda', 'Gata siamesa', 'Conchi'),
      ];
      const element = new PetListCreator('slot', mockPets);
      expect(element).toBeInstanceOf(PetListCreator);
      const item = screen.getByRole('list');
      expect(item).toBeInTheDocument();
    });
  });
});
