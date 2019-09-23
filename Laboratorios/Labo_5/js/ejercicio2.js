function dos(arr){
    var sum=0;
    var total=arr.length;
    for(var i=0; i<total; i++){
        sum=sum+arr[i];
    }
    var pro=sum/total;
    console.log("suma: " + sum);
    console.log("promedio: " + pro);
}

