//counter code
var button=document.getElementById('counter');
var counter = 0;
button.onclick=function(){
    //make request to counter endpoint
    
    //capture the response and store it in a variable
    
    //redner the variable in correct span
    counter = counter + 1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};
