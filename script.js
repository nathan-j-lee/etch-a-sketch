document.getElementById('div-grid').style.display = "flex";
for (i = 0; i < 16; i++) {
    var div = document.createElement('div');
    console.log(div);
    div.className = "grid-square";
    div.textContent='a';
    div.style.border = "solid 1px lightgray";
    document.getElementById('div-grid').appendChild(div);
}
