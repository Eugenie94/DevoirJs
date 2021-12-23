function celfar(){
    var valcel= parseInt(document.convert.celsius.value);
    var valfar = Math.round((valcel*9/5)+32);
    document.convert.celsius.value = " "+valcel+"°C" ;
    document.convert.fahrenheit.value = " "+valfar+"°F" ;
    }
    function farcel(){
    var valfar= parseInt(document.convert.fahrenheit.value);
    var valcel = Math.round((valfar-32)*5/9);
    document.convert.celsius.value = " "+valcel+"°C" ;
    document.convert.fahrenheit.value = " "+valfar+"°F" ;
}