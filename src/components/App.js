import React, { Component } from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

import Note from './Note';

const cookieKey = "myNotes";

class App extends Component {
  constructor(){
    super();

    this.state = {
      text: '',
      notes: []
    }
  }

  componentDidMount(){
    this.setState({ notes: read_cookie(cookieKey) });
  }

  submit(){
    const { notes, text } = this.state;

    notes.push({ text });

    this.setState({ notes });
    
    this.setState({ text: '' })

    bake_cookie(cookieKey, this.state.notes);
  }

  clearNotes(){
    delete_cookie(cookieKey);
    this.setState({ text: '', notes: [] })
  }

  render(){
    return (
      <div>
        <h2>My Notes App</h2>
        <Form inline>
          <FormControl text={this.state.text} onChange={event => this.setState({ text: event.target.value })}></FormControl>
          {' '}
          <Button onClick={() => this.submit()}>Submit</Button>
        </Form>
        {
          this.state.notes.map((note, index) => {
            return(
              <Note key={index} note={note} />
            )
          })
        }
        <hr />
        <Button onClick={()=> this.clearNotes()}>Clear Notes</Button>
      </div>
    )
  }
}

export default App;