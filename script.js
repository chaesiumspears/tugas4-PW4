function ga() {
    var btn = document.getElementById("BtnNo");
    var x = Math.floor(Math.random() * (window.innerWidth - btn.clientWidth));
    var y = Math.floor(Math.random() * (window.innerHeight - btn.clientHeight));
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function ya(){
    alert("YEAYYYY");
}