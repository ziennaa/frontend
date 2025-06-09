function temperature(){
    var c = document.getElementById('celsius').value;
    var f = (c*9/5) + 32;
    document.getElementById('fahrenheit').value = f
}
function weight(){
    var kg = document.getElementById('Kilograms').value;
    var pds = (kg)*2.2;
    document.getElementById('Pounds').value = pds;
}
function distance(){
    var kms = document.getElementById('Kilometeres').value;
    var mil = (kms)*0.62137;
    document.getElementById('Miles').value = mil;
}
