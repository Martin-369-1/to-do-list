const express=require('express');
const { title } = require('process');
const app=express();

const bodyParser=require('body-parser');

//seting view engine
app.set('view engine','ejs');
//setting port number
const PORT=process.env.PORT || 5000;

const urlencodedParser=bodyParser.urlencoded({extended:false});
//acessing server_ run server
app.listen(PORT,()=>console.log("Server is runnig >>>>>>"));


//To_do_list
const To_do_list=[]
//home page
app.get('/',(req,res)=>{
    res.render('home.ejs',{title:'home',To_do_list})
})

//page to create new to do list
app.get('/create',(req,res)=>{
    res.render('new_list.ejs',{title:'create',To_do_list})
})

//inputing form the to do list
app.post('/create',urlencodedParser,(req,res)=>{
    
    To_do_list.push(req.body);
    res.redirect('/');
})

//404 page
app.use((req,res)=>{
    res.status(400).render('404.ejs',{title:'404'});
})
