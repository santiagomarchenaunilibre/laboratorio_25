//PARTE 1 Y 2
// Crear o usar la base de datos base1
use base1;
// crear colección de libros
db.libros.insertOne(
    {
        _id: 1,
        nombre: 'El aleph', 
        autor: 'Borges', 
        editoriales: ['Planeta','Siglo XXI'], 
        precio: 20, 
        cantidad: 50        
    }
);
db.libros.insertOne(
    {
        _id: 2,
        nombre: 'Martin Fierro', 
        autor: 'Jose Hernandez', 
        editoriales: ['Planeta'], 
        precio:50,
        cantidad: 12   
    }    
);
// Mostrar los datos almacenados
db.libros.find()
//saber que base de datos estamos utilizando
db

// PARTE 3
//insertar documentos con insertMany
db.libros.insertMany(
    [
        {
            _id: 3,    
            titulo: 'Aprenda PHP',    
            autor: 'Mario Molina',    
            editorial: ['Siglo XXI','Planeta'],
            precio: 50,    
            cantidad: 20
        },
        {
           _id: 4,      
            titulo: 'Java en 10 minutos',   
            autor: 'Jose Niño',
            editorial: ['Siglo XXI'],    
            precio: 45,    
            cantidad: 1 
        }
    ]
);
db.libros.find()

//PARTE 4
// Busca el documento con id 1
db.libros.find({_id : 1});
// Nos muestra los documentos cuyo precio es 50
db.libros.find({precio : 50 });
// Muestra el documento de precio 50 y cantidad 20
db.libros.find({precio : 50, cantidad : 20 });
// Actualizar una categoria de _id= 2
db.libros.updateOne({_id:{$eq:2}},{$set:{precio:15,cantidad:1}});
db.libros.find();

// Mayores a precio 40
db.libros.find({ precio: { $gt:40 }});
//Recuperar todos los libros que en le campo cantidad tiene 50 o más:
db.libros.find( { cantidad: { $gte : 50 }});
//Recuperar todos los libros que en le campo cantidad hay un valor distinto a 50:
db.libros.find( { cantidad: { $ne : 50 }});
//Recuperar todos los libros cuyo precio estén comprendidos entre 20 y 45:
db.libros.find( { precio: { $gte : 20 , $lte : 45} })
//Recuperar todos los libros de la editorial 'Planeta':
db.libros.find( { editorial: { $in : ['Planeta'] } });
//Recuperar todos los libros que no pertenezcan a la editorial 'Planeta':
db.libros.find( { editorial: { $nin : ['Planeta'] } });