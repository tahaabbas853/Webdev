import React, { useState } from 'react';
import './App.css'
import NoteList from './components/NodeList';
import NoteInput from './components/NoteInput';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addNote = (note) => {
    if (isEditing) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = note;
      setNotes(updatedNotes);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setNotes([...notes, note]);
    }
  };

  const editNote = (index) => {
    setIsEditing(true);
    setEditIndex(index);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <NoteInput addNote={addNote} />
      <NoteList
        notes={notes}
        editNote={editNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
