let i=0;
function menuHover(){
    var x=document.getElementById('bottom-nav-1');
    if(i%2==0){
        x.style.left="0";
        i++;
    }
    else{
        x.style.left="-400px";
        i++;
    }
    console.log(i);
}