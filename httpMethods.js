var db = [{
    userName:"barfDude",
    password:"barfDudeRules123",
    email:"farf@snarf.biz"
   }, 
   {
    userName:"trobis",
    password:"trouble1",
    email:"gobis@snobis.biz"
}];

//copy the boilerplate from reqRes.js
//create some fake data (an array of object), set it equal to a var. 

//in reqRes.js we utilized the "post" method instead of the "get"
//These are called different http methods - and your server can use them
//to understand how to handle the request. 

//here's a quick, non-technical rundown of the most common ones
//get - grabs data or file from server. Typically used to read data from a database. Can't send a req.body with it
//post - sends data to server. Think about authenicating a password. CAN send a req.body with it. Used for inserting data.
//delete - sends data to server. Typically used to delete a value in a database. CAN send a req.body with it. 
//put - sends data to server. Typically used to update a value in the database (the value is already in the database, you are just changing it) 

//checkout https://zellwk.com/blog/crud-express-mongodb/ for some ideas about how it works. Don't worry about the database. We're
//mimicking it with the var db.

//feel free to only utilize these three - get will read data, post will update/inject data/ and delete will remove data 

//use all 4 methods to mimic the correct functionality with a database. Your database will be the variable {var}
//USE THE SAME ROUTE FOR ALL OF THEM. It's a common design pattern. For deleting, posting and inserting, 
//You'll use postman's form data to pass that data to your server, which will extract that using req.body.
//If that doesn't make sense, please ask!!

//Some extra info - You'll use postman to make requests to your server. You'll make a route and a response i.e.
  //app.post("/user", (req. res)=>{ ...
//for each of the 4 cases - creating, reading, updating, and deleting. You'll utilize the proper method for each route handler i.e.
  //app.put vs. app.post vs app.delete....
//If it's still confusing, google search express crud server 
