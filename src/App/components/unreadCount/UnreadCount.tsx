import * as React from 'react';
import {Note} from '../../model/Note'

class UnreadCount extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            notes: props.notes
        }
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