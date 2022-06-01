function factorial(num){
    if(!Number.isInteger(num) || typeof(num) !== 'number'){
    return "Nie zadziala";        
    } 
    if (num >= 1){
       return num * factorial(num - 1)
    } else {
        return 1
    }


    //  return n ? n * factorial(n - 1) : 1;
}
factorial(5);


