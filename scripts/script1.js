let i=0;
function menuHover(){
    var x=document.getElementById('bottom-nav-1');
    if(i%2==0){
        x.style.display="grid";
        i++;
    }
    else{
        x.style.display="none";
        i++;
    }

}