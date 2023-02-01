/* eslint-disable no-unused-vars */
export class Pet {
  id: string;
  isAdopted: boolean;
  static generateId() {
    // Este método genera un valor aleatorio muy grande, lo usamos tal cual sin plantearnos mucho.
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  constructor(
    public name: string,
    public specie: string,
    public owner: string = 'Sin dueño'
  ) {
    this.name = name;
    this.specie = specie;
    this.owner = owner;
    this.id = Pet.generateId();
    this.isAdopted = false;
  }

  adopt() {
    this.isAdopted = true;
  }
}
