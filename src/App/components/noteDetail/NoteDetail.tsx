import React, { Component } from 'react';
import { NoteAndFunction } from '../../model/NoteAndFunction';

/* 
  Grabs NoteAndFunction prop from parent -> App
  Replaced the instances of '&&' with the turnuary '?'
  When List is empty the '&&' will render the length of array, which is 0 onto Dom
  Do not want that, so turnuary fixes issue
*/
export default class NoteDetail extends Component<NoteAndFunction> {
  render() {
    return (
      <section className="NoteDetails">
        {/* TODO some rendering bugs in here when list is empty */}
        {this.props.note.notes.length ? (
          <h3 className="NoteDetails-title">
            {
              this.props.note.notes[this.props.note.currentNoteIndex]
                .subject
            }
          </h3>
        ) : (
          ''
        )}
        {this.props.note.notes.length ? (
          <p className="NoteDetails-subject">
            {
              this.props.note.notes[this.props.note.currentNoteIndex]
                .body
            }
          </p>
        ) : (
          ''
        )}
        {this.props.note.notes.length ? (
          <button onClick={() => this.props.updateRead()}>
            Mark as read
          </button>
        ) : (
          'No Notes'
        )}
      </section>
    );
  }
}
