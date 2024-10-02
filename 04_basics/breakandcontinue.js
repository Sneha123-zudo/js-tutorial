// break statement

for (let index = 0; index < 10 ; index++) {
    const element = index;
    //console.log(element);
    if(index==5){
        //console.log(("It is 5"));
        break;
    }
}

for (let index = 0; index < 10 ; index++) {
    if(index==5){
        //console.log(("It is 5"));
        break;
    }
    const element = index;
    console.log(element);
}



// continue statement
for (let index = 0; index < 10 ; index++) {
    if(index==5){
        //console.log(("It is 5"));
        continue;
    }
    const element = index;
    console.log(element);
}
