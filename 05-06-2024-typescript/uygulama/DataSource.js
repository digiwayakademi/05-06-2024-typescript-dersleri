"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSource = void 0;
var Product_1 = require("./Product");
var DataSource = /** @class */ (function () {
    function DataSource() {
        this.products = new Array(new Product_1.Product(1, "İphone 13", "Telefon", 40000), new Product_1.Product(2, "İphone 14", "Telefon", 50000), new Product_1.Product(3, "İphone 15", "Telefon", 60000), new Product_1.Product(4, "Samsung s24", "Telefon", 45000));
    }
    DataSource.prototype.getProducts = function () {
        return this.products;
    };
    return DataSource;
}());
exports.DataSource = DataSource;
