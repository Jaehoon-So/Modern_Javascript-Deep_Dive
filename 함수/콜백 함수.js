function repeat(n, f){
    for(let i = 0; i < n; i++){
        f(i);
    }
}

let logAll = function(i) {
    console.log(i);
}

repeat(5, logAll);

let logOdds = function(i){
    if(i % 2) console.log(i);
};

repeat(5, logOdds);