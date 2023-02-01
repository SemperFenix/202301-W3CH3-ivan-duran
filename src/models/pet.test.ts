import { Pet } from './pet';

describe('Given Pet class', () => {
  describe('When called without owner parameter', () => {
    test('Then it should return an object with the parameters given', () => {
      const pet = new Pet('Joti', 'Gato mein khun');
      expect(pet.name).toBe('Joti');
      expect(typeof pet.id).toBe('string');
      expect(pet.specie).toBe('Gato mein khun');
      expect(pet.owner).toBe('Sin dueño');
      expect(pet.isAdopted).toBe(false);
    });
  });
  describe('When called with an owner parameter', () => {
    test('Then it should return an object with the parameters given', () => {
      const pet = new Pet('Joti', 'Gato mein khun', 'Amaya');
      expect(pet.name).toBe('Joti');
      expect(typeof pet.id).toBe('string');
      expect(pet.specie).toBe('Gato mein khun');
      expect(pet.owner).toBe('Amaya');
      expect(pet.isAdopted).toBe(false);
    });
  });
});
