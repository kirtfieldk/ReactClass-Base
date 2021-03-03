import './App.scss';

import * as React from 'react';

// your editor might show these svg imports as errors "Cannot find module", safe to ignore
import logo from './logo.svg';
import data from '../db.json';
import UnreadCount from './components/unreadCount/UnreadCount'
import NotesSidebar from './components/notesSidebar/NotesSidebar'
import NoteDetail from './components/noteDetail/NoteDetail'
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      notes: [],
      currentNoteIndex: 0
    };
  }

  componentWillMount() {
    // TODO fetch notes and push them into state.
    this.setState((currentState: any) => {
      currentState.notes = data.notes;
    })
  }


  // TODO this callback isn't working
  selectNote(e: any) {
    this.setState({ currentNoteIndex: e.currentTarget.id });
  }

  
  // TODO this component should be broken into separate components.

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Notes Viewer Test App</h1>
          <UnreadCount notes={this.state.notes}/>
        </header>
          <NotesSidebar note={this.state} selectNote={this.selectNote.bind(this, event)} />
          <NoteDetail note={this.state}/>
      </div>
    );
  }
}

export default App;
