const fs = require('fs');
let PORT = process.env.PORT || 3000;
// const util = require('util');
const express= require('express');
const app = express();
// const url = require('url');
const { v4: uuidv4 } = require('uuid');
let db = require('./db/db.json');
const path = require('path');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// gets and returns notes.html
app.get('/notes', (req, res) =>{
    return res.sendFile(path.resolve(__dirname, './public/notes.html'));
})


// should read the 'db.json' file and return the saved notes.
app.get('/api/notes', (req, res)=>{
    res.json(db);
});

// should recieve a new note to save on the request body, add it to the 'db.json', then return new note to the client with unique id for each note.
app.post('/api/notes', (req, res) =>{
    // It seems I can do a path.join() here... Just not sure how.
   

    const createdNote = req.body;
    console.log(req);
    createdNote.id = uuidv4();
    db.push(createdNote);

fs.writeFile("./db/db.json", JSON.stringify(db), (err)=>{
    console.log('Note Saved!');
    if (err) throw err;
});

   res.end();
   
});

/* should recieve query parameter the id of a note to delete: 
1) read all notes (for loop, .forEach() to find the matching id to be deleted)

2)remove the note with the matching id.

3) be able to rewrite new notes to 'db.json'.
*/
app.delete('/api/notes/:id', (req, res) =>{
    // I know I need readFile... But do I need writeFile too?
const assignedID = req.params.id;





// Not sure how to write the below:
db = db.filter(function item(note){
   return note.id!==assignedID});
res.end()

});

// gets and returns index.html
app.get('*', (req, res) =>{
    return res.sendFile(path.resolve(__dirname, './public/index.html'));
    });
    










    
    
    // app.listen(3000);
    app.listen(PORT, function() {
        console.log(`App listening on http://localhost:${PORT}`);
    })
    
