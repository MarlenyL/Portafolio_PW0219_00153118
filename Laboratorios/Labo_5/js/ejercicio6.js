function seis(arr){
    var total=arr.length;
    for(var i=0; i<total; i++){
        for(var j=0; j<total;j++){
            if(arr[i]<arr[j]){
                var aux= arr[i];
                arr[i]=arr[j];
                arr[j]=aux;
            }
        }
    }
    return arr;
}