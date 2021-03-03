import React, { Component, SyntheticEvent } from 'react'
import {Note} from '../../model/Note'
import checkMark from './check-mark.svg';
import classNames from 'classnames';
import {NoteAndFunction} from '../../model/NoteAndFunction'
export default class NotesSidebar extends Component<NoteAndFunction> {
  state: NoteAndFunction;
    constructor(props: NoteAndFunction) {
        super(props);
    
        this.state = {
          note: {
            notes: this.props.note.notes,
            currentNoteIndex: this.props.note.currentNoteIndex,
          },
          function: this.props.function
        };
      }
    getNotesRows() {
        // TODO fix the selected row highlight, which breaks on subsequent clicks to the sidebar.
        return this.state.note.notes.map((note: Note, index: number) => (
          <div
            key={index}
            className={classNames('NotesSidebarItem', {
              selected: this.state.note.notes.indexOf(note) === this.state.note.currentNoteIndex
            })}
            onClick={(e:SyntheticEvent) => this.state.function(e)}
            id={this.state.note.notes.indexOf(note) + ''}
          >
            <h4 className='NotesSidebarItem-title'>{note.subject}</h4>
            {note.read && <img alt='Check Mark' src={checkMark} />}
          </div>
        ));
      }
    render() {
        return (
          <section className='NotesSidebar'>
            <div>
                 {/* TODO this section should be rendered as a sidebar, left of the NoteDetails, taking up
                    the full height of the space beneath the header. */}
                <h2 className='NotesSidebar-title'>Available Notes:</h2>
                <div className='NotesSidebar-list'>{this.getNotesRows()}</div>
            </div>
            </section>
        )
    }
}
