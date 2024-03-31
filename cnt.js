let x = 0;

document.getElementById("decreasebtn").onclick = function(){
    x-=1;
    document.getElementById("countlabel").innerHTML = x;
    
}
document.getElementById("resetbtn").onclick = function(){
    x=0;
    document.getElementById("countlabel").innerHTML = x;   
}
document.getElementById("increasebtn").onclick = function(){
    x+=1;
    document.getElementById("countlabel").innerHTML = x;
}