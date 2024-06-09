const array1 = [];
// const array2 = new Array();             // []


array1.push('123');
array1.push('456');

const deleted_element = array1.pop();       // '456'            
console.log(array1);        // ['123']


// const array1 = [];
array1.push('456');         // ['456']
array1.unshift('123');         // ['123', '456']

const deleted_first_element = array1.shift();       // '123'
console.log(array1);        // ['456']



// const array1 = ['abc'];
array1.push('123', '456', '789');               // ['abc', '123', '456', 789']
array1.unshift('123', '456', '789');               // ['123', '456', 789', 'abc']


const demo_array = ['123', '456', '789', '000'];
console.log(demo_array[0]);     // '123'
console.log(demo_array[1]);     // '456'
console.log(demo_array[3]);     // '000'

demo_array.splice(1, 1);





console.log(array1);            // ['123', '456']









for (let i = 0; i < demo_array.length; i++) {
    console.log(demo_array[i]);
}

for (const element of demo_array) {
    console.log(element);
}
