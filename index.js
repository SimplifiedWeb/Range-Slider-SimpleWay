var scroll = document.getElementById('rangevalue');
var range = document.getElementById('result');
range.innerHTML = scroll.value;
scroll.oninput = function(){
    range.innerHTML = this.value;
}