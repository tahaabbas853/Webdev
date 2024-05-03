import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const NoteInput = ({ addNote }) => {
  const [currentNote, setCurrentNote] = useState('');

  const handleInputChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleAddNote = () => {
    if (currentNote.trim() !== '') {
      addNote(currentNote);
      setCurrentNote('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={currentNote}
        onChange={handleInputChange}
      />
      <Button onClick={handleAddNote}>Add Note</Button>
    </div>
  );
};

export default NoteInput;
