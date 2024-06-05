import { Product } from "./Product";
import { ProductService } from "./ProductService";


let _productService = new ProductService();

let result;

result = _productService.getProducts();
result = _productService.getById(1);

let p = new Product();
p.id = 1;
p.name= "Fırın";
p.price = 35000;
p.category="Beyaz Eşya";

//_productService.saveProduct(p);
_productService.saveProduct(p)
result = _productService.getProducts();

console.log(result);