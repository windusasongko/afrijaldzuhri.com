import React from 'react'

const notes = require('./notes.json')

const Notes = () => (
<>
    {/* <h1>Archived links</h1> */}

    {notes.data.map((note, i) => (
      <div key={i}>
        <a href={note.link} target="_blank" rel="noopener noreferrer"><strong>{note.title}</strong></a>
        <p>{note.description}</p>
        <p>{new Date(note.date).toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <hr />
      </div>
    ))}
    </>
)

export default Notes