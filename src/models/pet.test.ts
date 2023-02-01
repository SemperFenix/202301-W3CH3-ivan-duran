import { Pet } from './pet';

describe('Given Pet class', () => {
  describe('When called', () => {
    test('Then it should return an object with the parameters given', () => {
      const pet = new Pet('Joti', 'Gato mein khun');
      expect(pet.name).toBe('Joti');
      expect(typeof pet.id).toBe(Number);
      expect(pet.specie).toBe('Gato mein khun');
      expect(pet.owner).toBe('Sin dueño');
      expect(pet.isAdopted).toBe('False');
    });
  });
});
