function cinco(palabra){
    var total = palabra.length;
    var i = 0;
    var j = total-1;
    while(palabra.charAt(i)=== palabra.charAt(j)){
        if(i===total/2){
            return true;
        }
        i++;
        j--;
    }
    return false;
}