import { Pet } from '../../models/pet';
import { Item } from './item';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Given the Item class', () => {
  describe('When passed the parameters', () => {
    test('Then it should renderize the content', () => {
      document.body.innerHTML = '<ul></ul>';
      const element = new Item('ul', new Pet('Federica', 'Dog'));
      expect(element).toBeInstanceOf(Item);
      const item = screen.getByRole('listitem');
      expect(item).toBeInTheDocument();
    });
  });
});
