import { Product } from "./Product";


export class DataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1,"İphone 13","Telefon",40000),
            new Product(2,"İphone 14","Telefon",50000),
            new Product(3,"İphone 15","Telefon",60000),
            new Product(4,"Samsung s24","Telefon",45000),
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}

