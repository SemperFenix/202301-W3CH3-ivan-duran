import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Add } from './add';
describe('Given the Add component', () => {
  describe('When passed the parameters', () => {
    test('Then it should renderize the content', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Add('slot');
      expect(element).toBeInstanceOf(Add);
      const item = screen.getByRole('presentation');
      expect(item).toBeInTheDocument();
    });
  });
});
