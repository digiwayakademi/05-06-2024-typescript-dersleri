var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(point.x, " konumundan y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs x: ".concat(point.x, " konumundan y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 3, y: 4 });
taxi_2.currentLocation = { x: 1, y: 8 };
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
var bus_1 = new Bus();
bus_1.travelTo({ x: 2, y: 7 });
bus_1.currentLocation = { x: 3, y: 9 };
console.log(bus_1.currentLocation.x);
console.log(bus_1.currentLocation.y);
