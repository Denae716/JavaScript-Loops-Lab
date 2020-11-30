// 1. One to Ten

for(i = 1; i <11; i++) {
    console.log(i);
}

// 2. Squares

for(i = 1; i < 11; i++) {
    console.log(i*i);
}

// 3. Even Under N

for(i = 2; i < 20; i+=2){
    console.log(i);
}

// 4. Sum

let count = n
let total = 0
function sum(n,m){
    while(count < m){
     total += n;
     n++;
     return total;
    }
}

// 5. Are We There Yet

while (userInput = prompt("Are we there yet?")) {
    if (userInput === "Yes"){
        console.log("Good!")
        break;
    }
    else {
        userInput = prompt("Are we there yet?")
    }

}

// 6. Triangle

for (let i = 1; i < 7; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
        output += j + " "
    }
    console.log(output.replace(/\d/g,'*'))
}

// 7. Table Square

for (let i = 1; i < 5; i++){
    for (let j = 2; j < 17; j+=2){
        
        for (let k = 3; k < 17; k+=3){
        
            for (let l = 4; l < 17; l+=4){
                console.log("| " + i, "| " + j, "| " + k, "| " + l + " |")
            }
        }
    }
}