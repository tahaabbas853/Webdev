import React from 'react';
import { Button } from 'react-bootstrap';

const Note = ({ note, index, editNote, deleteNote }) => {
  const handleEditNote = () => {
    editNote(index);
  };

  const handleDeleteNote = () => {
    deleteNote(index);
  };

  return (
    <tr>
     <td onClick={handleEditNote}>{note}</td>
      <td>
        <Button variant="primary" onClick={handleEditNote}>Edit</Button>
      </td>
     
      <td>
        <Button variant="danger" onClick={handleDeleteNote}>Delete</Button>
      </td>
    </tr>
  );
};


export default Note;
