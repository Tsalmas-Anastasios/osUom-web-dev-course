const auto_car = {

    name: 'something',
    model: 'model',
    color: 'black',


    // methods
    start: () => console.log('start'),
    drive: () => console.log('drive'),
    break: () => console.log('break'),
    stop: () => console.log('stop'),
    name: () => console.log(this.name),


};


const auto_car_copy = {

    name: '123',
    model: '456',


    // methods
    start: () => console.log('start1'),
    drive: () => console.log('drive1'),
    break: () => console.log('break1'),
    stop: () => console.log('stop1', this.model),

};


// const auto_car2 = auto_car;

// const auto_car2 = {
//     ...auto_car_copy,
//     ...auto_car,

// };


// console.log(auto_car2);



let auto_car2 = {};
Object.assign(auto_car2, auto_car, auto_car_copy);


auto_car.name = 'something else';


// auto_car2.name = "123";


console.log(auto_car.name);


auto_car.start();






// constructor
function User(first_name, last_name) {

    if (!first_name || !last_name)
        return;


    this.first_name = first_name;
    this.last_name = last_name;
    this.email = `${first_name}@${last_name}.com`;
    this.phone = null;


    return this;

}


const user1 = new User("Anastasios", "Tsalmas");
console.log(user1);

console.log(user1?.age || 'non-exist');

delete user1.password;