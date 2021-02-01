var count = 0;

while(count < 3){
    console.log(count);
    count++;
}
/** */
var count1 = 0;
while(true){
    console.log(count1);
    count1++;

    if(count1 == 3) break;

}
/** */ 
var count2 = 0;
do{
    console.log(count2);
    count2++;

}while(count < 3);

/** 08-20 */
foo: {
    console.log(1);
    break foo;
    console.log(2);
}
console.log('Done!');

/** 08-21 */

outer: for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
        if(i + j === 3) break outer;
        console.log(`inner[${i}, ${j}]`);
    }
}

/** 08-22 */

var string = 'Hello World';
var search = 'l';
var index;

for(var i = 0; i < string.length; i++){
    if(string[i] === search){
        index = i;
        break;
    }
}
console.log(index);

/** 08-23 */

var string2 = 'Hello World';
var search2 = 'l';
var count2 = 0;

for(var i = 0; i < string2.length; i++){
    if(string[i] !== search2) continue;
    count2++;
}

console.log(count2);

const regexp = new RedExp(search2, 'g');
console.log(string2.match(regexp).length);