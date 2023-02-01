export class Pet {
  id!: number;
  name!: string;
  specie!: string;
  isAdopted!: boolean;
  owner!: string;

  adopt() {
    this.isAdopted = true;
  }
}
