import React, { Component, Fragment } from 'react';

export default class Note extends Component {
  render(){
    return(
      <Fragment>
        <p className="note">{this.props.note.text}</p>
      </Fragment>
    )
  }
}