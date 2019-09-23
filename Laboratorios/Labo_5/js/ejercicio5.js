function cinco(palabra){
    var I = 0;
    var J = palabra.length() - 1;
    var mitad = J / 2;
    while(palabra[I] == palabra[J]){
        if(mitad === I){
            return true;
        }
            J--;
            I++;
        if(mitad != I){
            return false;
        }
            
    }
}