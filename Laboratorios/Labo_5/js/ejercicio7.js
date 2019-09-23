function siete(n){
    var fib1=0;
    var fib2=1;
    if(n===1){
        console.log(fib1 + " ");
    }else if(n===2){
        console.log(fib1 + " ");
        console.log(fib2 + " ");
    }
    else{
        console.log(fib1 + " ");
        console.log(fib2 + " ");
        for(i = 3; i<=n ; i++){
            var fib3 = fib1+fib2;
            console.log(fib3 + " ");
            fib1 = fib2;
            fib2 = fib3;
        }
    }
}