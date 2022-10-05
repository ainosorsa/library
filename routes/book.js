var express=require('express');
var router=express.Router();
var book=require('../models/book_model.js');

//palauta kaikki kirjat
router.get('/', function(request, response){
    let data=book.getAllBooks();
    response.send(data); 
});

//palauta yksi kirja id:n perusteella
router.get('/:id', function(request, response){
    let id=request.params.id;
    let data=book.getOneBook(id);
    response.send("Palauttaa kirjan, jonka id="+id);
});

//lidää uusi kirja
router.post('/', function(request, response){
    
});

//päivitä kirja annetun id:n perusteella
router.put('/',function(request, response){
    let id=request.params.id;
    response.send("Päivittää kirjan jonka id="+id);
});

//poidta kirja annetun id:n perusteella
router.delete('/',function(request, response){
    let id=request.params.id;
    response.send("Poistaa kirjan jonka id="+id);
});

module.exports=router;