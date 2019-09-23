function tres(n,arr){
    var total=arr.length;
    var cont=0;
    for(var i=0; i<total; i++){
        if(n===arr[i]){
            cont=cont+1;
        }
    }
    return cont;
}