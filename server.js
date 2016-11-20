var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;
var config = {
        user : 'tanu5',
        databse : 'tanu5',
        host : 'db-imad.hasura-app.io',
        port : '5432',
        password : process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

//var articles = {
  //   'article-one' : {
    //     title : 'Article-One | Tanusha',
      //   heading : 'Article-one',
      //  date : 'sep 5,2016',
         // content : `
             //     <p>
                    //     This is my first article
                // </p>
                // <p>
                   //     Welcome to the first article
                 // </p> `
         // },
     // 'article-two' : {
        //   title : 'Article-Two | Tanusha',
         // heading : 'Article-Two',
         // date : 'sep 8,2016',
         // content : `
            //    <p>
              //          This is my second article
            //    </p> `
         // },
     // 'article-three' : {
        // title : 'Article-Three | Tanusha',
         // heading : 'Article-three',
         // date : 'sep 15,2016',
         // content : `
            //     <p>
                //         This is my third article
                // </p>
                // <p>
                   //     this is the last  article
                // </p> `
         
    // }
// };
 // function createTemplate(data) {
    //    var title = data.title;
      //  var date = data.date;
    //    var heading = data.heading;
     //  var content = data.content;
      // var htmltempalte = `
      // <html>
       // <head>
         // <title>
            //    ${title}
       //  <meta name = "viewpoint" content="width-device-width, intial scale = 1" / >
        // <link href> = "/ui/style.css" rel = "stylesheet" />
         // </head>
         // <body>
            //     <div class = "containers" >
               //     <div>
                  //       <a href =" / ">Home</a>
                 //    </div>
                   //  <h3>
                      //     ${heading}
                    // </h3>
                    // <div>
                       //     ${date}
                    // </div>
                    // <div>
                       //      ${content}    
                    // </div>
                // </div>
            // </body>
        // </html>
    // ` ;
       //  return htmlTemplate;
// }
  app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html')); 
  });
  var pool = new pool(config);
  app.get('/test-db',function(req,res){
      //make a select request
      //return a response with results
      pool.query('SELECT *FROM test',function(err,result){
           if(err) {
                res.status(500).send(err,toString());
            } else {
                res.send(JSON.stringify(result));
            }
      });
  });
// app.get('/articleName', function(req,res)
   //     {
            //articleName == article-one
            //articles[articleName] = { } content object for article one
     //       var articleName = req.params.articleName;
        //    res.send(createTemplate(articles[articleName]));
        // });

var counter = 0;
app.get('/counter', function (req, res) {
     counter = counter + 1;
   res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names = [];
app.get('/submit-name/:name', function(req,res) {
    // get the name from the request
    var name = req.params.name;
     
    names.push(name);
     //JSON:javascriptobject notation
     res.send(JSON.stringify(names));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

