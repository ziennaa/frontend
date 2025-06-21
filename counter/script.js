function inc(){
    let i = document.getElementById("increase");
    let g = document.getElementById("numb");
    g = g.innerText;
    g = parseInt(g);
    g += 1;
    document.getElementById("numb").innerText = g;
}
function dec(){
    let d = document.getElementById("decrease");
    let f = document.getElementById("numb");
    f = f.innerText;
    f = parseInt(f);
    f -= 1;
    document.getElementById("numb").innerText = f;
}
