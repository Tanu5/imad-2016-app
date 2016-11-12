//counter code
var button=document.getElementById('counter');

button.onclick = function(){
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take  some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    
    
    //make the request
    request. open('GET', '/counter', true);
    request. send(null);
};
   
//Submitname
// Move the next 2 lines, right now it's reading the value only at the page load time
//var nameInput = document.getElementById('name'); 
//var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function() {
	//create a request object
	var request = new XMLHttpRequest();
    
	//capture the response and store it in a variable
	//request.readystatechange = function() {		// YOUR LINE	
	request.onreadystatechange = function() {
	if (request.readyState === XMLHttpRequest.DONE) {
			//Take  some action
			if (request.status === 200) {
				//capture a list of names and render it as a list
				var names = request.responseText;
				names = JSON.parse(names);
				var list='';
				for (var i=0;i<names.length;i++) {
					//list +='<li>' + names[i] + '<li>'; // YOUR LINE
					list +='<li>' + names[i] + '</li>';
				} 

				var ul = document.getElementById('namelist');
				ul.innerHTML = list;
            }
        }
        //not done yet
    };

//Moved the lines here    
var nameInput = document.getElementById('name'); 
var name = nameInput.value;
//Clear the field, so that the user don't have to do it manually everytime
nameInput.value = '';

	//Make the request
//	request. open('GET', '/submit-name?name='  +  name, true); // YOUR LINE; If you give '?' then in server side you've to read params, "/:" in server side different
	request. open('GET', '/submit-name/name='  +  name, true);
	request. send(null);
};