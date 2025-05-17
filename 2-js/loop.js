for (let i = 0; i < 5; i++) {
    console.log(i);
}

let arr = ['honda', 'toyota', 'ford', 'mercedes', 'bmw'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (item, index) {
    console.log(item, index);
}
);

arr.map(function (item, index) {
    console.log(item, index);
}
);