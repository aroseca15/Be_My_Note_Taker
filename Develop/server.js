const fs = require('fs');
const http = require('http');
const util = require('util');
const express= require('express');
const app = express();
const url = require('url');
const { v1: uuidv1 } = require('uuid');


// gets and returns notes.html
app.get('/notes', (req, res) =>{
    return res.send('./public/notes.html');
})


// gets and returns index.html
app.get('*', (req, res) =>{
return res.send('./public/index.html');
});

// should read the 'db.json' file and return the saved notes.
app.get('/api/notes', (req, res)=>{
    const notes = JSON.parse(data);
    const displayNotes = req.body;
    this.fs.readFileSync(notes);
res.send('Here are your saved notes.' + res.JSON(displayNotes))
});

// should recieve a new note to save on the request body, add it to the 'db.json', then return new note to the client with unique id for each note.
app.post('/api/notes', (req, res) =>{
    // It seems I can do a path.join() here... Just not sure how.
    this.fs.readFileSync(notes);

    const createdNote = req.body;
    const notes = JSON.parse(data);
    createdNote.id = uuidv1();
    notes.push(createdNote);

   const makeNote = this.fs.writeFileAsync("./Develope/db.json", JSON.stringify(notes))
   res.send('Your Note Has Been Saved' + makeNote);
   if (err) throw err;
});

/* should recieve query parameter the id of a note to delete: 
1) read all notes (for loop, .forEach() to find the matching id to be deleted)

2)remove the note with the matching id.

3) be able to rewrite new notes to 'db.json'.
*/
app.delete('/api/notes/:id', (req, res) =>{
    // I know I need readFile... But do I need writeFile too?
const assignedID = req.params.id;
const notes = JSON.parse(data);
this.fs.readFileSync(notes);


// Not sure how to write the below:
const idArray = notes.filter(function item(){
   return id!==assignedID});


});











const server = http.createServer((req, res){
    
});
    
    
    server.listen(3000);
    
