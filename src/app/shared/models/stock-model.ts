class Stock {
  id: number;
  name: string;
  price: number;
  minimum: number;
  exclusiveMinimum: boolean;
  variation: number;
  date: string;

  constructor(id?: number, name?: string, price?: number, minimum?: number,
              exclusiveMinimum?: boolean, variation?: number, date?: string) {
    this.id = id || 0;
    this.name = name || '';
    this.price = price || 0;
    this.minimum = minimum || 0;
    this.exclusiveMinimum = exclusiveMinimum || false;
    this.variation = variation || 0;
    this.date = date || '';
  }
}

export default Stock;
