import './App.scss';

import React, {Component, SyntheticEvent} from 'react';

// your editor might show these svg imports as errors "Cannot find module", safe to ignore
import logo from './logo.svg';
import data from '../db.json';
import {NoteIndex} from './model/NoteIndex'
import UnreadCount from './components/unreadCount/UnreadCount'
import NotesSidebar from './components/notesSidebar/NotesSidebar'
import NoteDetail from './components/noteDetail/NoteDetail'
import { NoteAndFunction } from './model/NoteAndFunction';
class App extends Component<{}> {
  state:NoteIndex
  constructor(props: {}) {
    super(props);
    this.state = {
      notes: [],
      currentNoteIndex: 0
    };
  }

  componentWillMount() {
    // TODO fetch notes and push them into state.
    this.setState((currentState: NoteIndex) => {
      currentState.notes = data.notes;
    })
  }
  constructNoteAndFunction(): NoteAndFunction{
    return {
      function: this.selectNote,
      note: {
        notes: this.state.notes,
        currentNoteIndex: this.state.currentNoteIndex
      }
    }
  }

  // TODO this callback isn't working
  selectNote(e: SyntheticEvent): void {
    this.setState({ currentNoteIndex: e.currentTarget.id });
  }

  
  // TODO this component should be broken into separate components.

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Notes Viewer Test App</h1>
          <UnreadCount {...this.state}/>
        </header>
          <NotesSidebar {...this.constructNoteAndFunction()}/>
          <NoteDetail {...this.state}/>
      </div>
    );
  }
}

export default App;
