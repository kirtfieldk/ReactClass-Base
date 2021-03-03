import React, { Component } from 'react'

export default class NoteDetail extends Component<any, any> {
    constructor(props: any) {
        super(props);
    
        this.state = {
          notes: [],
          currentNoteIndex: 0
        };
      }
        // TODO this callback isn't working
    markAsRead() {
        this.setState((currentState: any) => {
        let marked = {
            ...currentState.notes[currentState.currentNoteIndex],
            read: true
        };
        let notes = [...currentState.notes];
        notes[currentState.currentNoteIndex] = marked;
        return { ...currentState, notes };
        });
    }

    render() {
        return (
            <section className='NoteDetails'>
            {/* TODO some rendering bugs in here when list is empty */}
            {this.state.notes.length && (
              <h3 className='NoteDetails-title'>
                {this.state.notes[this.state.currentNoteIndex].subject}
              </h3>
            )}
            {this.state.notes.length && (
              <p className='NoteDetails-subject'>
                {this.state.notes[this.state.currentNoteIndex].body}
              </p>
            )}
            <button onClick={this.markAsRead}>Mark as read</button>
          </section>
        )
    }
}
