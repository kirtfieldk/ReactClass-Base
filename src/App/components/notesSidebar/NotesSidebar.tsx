import React, { Component } from 'react'
import {Note} from '../../model/Note'
import checkMark from './check-mark.svg';
import classNames from 'classnames';

export default class NotesSidebar extends Component<any, any> {
    constructor(props: any) {
        super(props);
    
        this.state = {
          notes: this.props.note.notes,
          currentNoteIndex: this.props.note.currentNoteIndex,
          selectNote: this.props.selectNote.bind(this)
        };
      }
    getNotesRows() {
        // TODO fix the selected row highlight, which breaks on subsequent clicks to the sidebar.
        return this.state.notes.map((note: Note, index: number) => (
          <div
            key={index}
            className={classNames('NotesSidebarItem', {
              selected: this.state.notes.indexOf(note) === this.state.currentNoteIndex
            })}
            onClick={(e:any) => this.selectNote(e)}
            id={this.state.notes.indexOf(note)}
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
