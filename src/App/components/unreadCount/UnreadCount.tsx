import * as React from 'react';
import { Note } from '../../model/Note';
import { NoteIndex } from '../../model/NoteIndex';
/*
    Grabs NoteIndex prop from parent and simple iterate through the array
    and count all notes marked as read, with .filter method
*/
class UnreadCount extends React.Component<NoteIndex> {
  /* RenderUnread will render the numer of unread notes */
  renderUnread() {
    return (
      <div>
        Unread:
        <span className="App-title-unread-count">
          {/* TODO this should be a count of only the unread messages */}
          {this.props.notes.filter((el: Note) => !el.read).length}
        </span>
      </div>
    );
  }

  render() {
    return <div>{this.renderUnread()}</div>;
  }
}

export default UnreadCount;
