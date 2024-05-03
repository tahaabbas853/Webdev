import React from 'react';
import { Table } from 'react-bootstrap';
import Note from './Note';

const NoteList = ({ notes, editNote, deleteNote }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Notes</th>
          <th>Functionality</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            index={index}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default NoteList;
