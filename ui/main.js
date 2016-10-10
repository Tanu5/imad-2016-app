console.log('Loaded!');
//change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='modified text';
//move the image

var img=document.getElementById('madi');
var marginleft=0;
function moveRight()
{
    marginleft=marginlef + 2;
    img.style.marginleft=marginleft + px;
}
img.onclick=function()
{
  var interval=SetIneterval(moveright, 40);  
};
img.onclick=function(){
    img.style.marginleft='100px';
};
