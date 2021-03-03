import * as React from 'react';
import {Note} from '../../model/Note'
import {NoteIndex} from '../../model/NoteIndex'
class UnreadCount extends React.Component<NoteIndex> {
    state: NoteIndex
    constructor(props: NoteIndex) {
        super(props);
        this.state = {
            notes: this.props.notes, 
            currentNoteIndex: this.props.currentNoteIndex}
      }
    

      /* RenderUnread will render the numer of unread notes */
    renderUnread(){
        return (
            <div>
                Unread:
                <span className='App-title-unread-count'>
                {/* TODO this should be a count of only the unread messages */}
                {this.state.notes.filter((el: Note) => !el.read).length}
                </span>
            </div>
        )
    }
    
    render(){
        return(
            <div>
                {this.renderUnread()}
            </div>
        )
    }
}

export default UnreadCount