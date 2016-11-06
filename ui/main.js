//counter code
var button=document.getElementById('counter');

button.onclick = function(){
    //make request to counter endpoint
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            //Take  some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    //make the request
    request.open('GET', 'http://tanu5.imad.hasura-app.io/counter',true);
    request.send(null);
};
   
