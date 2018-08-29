let vp = document.getElementById('viewport');
vp.innerHTML = window.innerWidth;

window.onresize = updateVp;

function updateVp(){
    var vpDiv = document.getElementById('viewport');
    vpDiv.innerHTML = window.innerWidth;
}