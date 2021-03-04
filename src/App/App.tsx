import './App.scss';

import React, { Component, SyntheticEvent } from 'react';

// your editor might show these svg imports as errors "Cannot find module", safe to ignore
import logo from './logo.svg';
import UnreadCount from './components/unreadCount/UnreadCount';
import NotesSidebar from './components/notesSidebar/NotesSidebar';
import NoteDetail from './components/noteDetail/NoteDetail';
import axios from 'axios';
import {
  NoteAndFunction,
  defaultNoteAndFunctionState,
} from './model/NoteAndFunction';
class App extends Component<{}> {
  state: NoteAndFunction = defaultNoteAndFunctionState;
  componentDidMount = async () => {
    // TODO fetch notes and push them into state.
    const response = await axios.get('http://localhost:4000/notes');
    this.setState({
      updateSelected: this.selectNote.bind(this),
      updateRead: this.markAsRead.bind(this),
      note: {
        notes: response.data,
        currentNoteIndex: 0,
      },
    });
  };
  // TODO this callback isn't working
  // SelectNote will set the state to the correct note selected by the user
  // In addition, we will also populate the SelectedNote
  selectNote(e: SyntheticEvent): void {
    this.setState({
      ...this.state,
      note: {
        notes: this.state.note.notes,
        currentNoteIndex: e.currentTarget.id,
      },
    });
    /* This updates state with active note index */
  }
  // TODO this callback isn't working
  markAsRead() {
    this.setState((currentState: NoteAndFunction) => {
      let marked = {
        ...currentState.note.notes[
          currentState.note.currentNoteIndex
        ],
        read: true,
      };
      let notes = [...currentState.note.notes];
      notes[currentState.note.currentNoteIndex] = marked;

      return {
        ...currentState,
        note: {
          notes,
          currentNoteIndex: this.state.note.currentNoteIndex,
        },
      };
    });
  }

  // TODO this component should be broken into separate components.
  render() {
    return (
      <div className="App">
        <header className="App-header row">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Notes Viewer Test App</h1>
          <UnreadCount {...this.state.note} />
        </header>
        <div className="row App">
          <div className="sidebar">
            <NotesSidebar {...this.state} />
          </div>
          <div className="details">
            <NoteDetail {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
