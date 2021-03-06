import React, { Component } from 'react';
import Page from './page.js';
import axios from 'axios';

class Book extends Component {
  render() {
    // should be able to access a particular entry with a get request.
    return (
      <div className="Book">
        <Page user={this.props.user} updateTitle={this.props.updateTitle} entry = {this.props.entry} title={this.props.title}
        logTime={this.props.logTime} updateEntry={this.props.updateEntry} postToDB={this.props.postToDB} getFromDB={this.props.getFromDB}/>
      </div>
    );
  }
}

export default Book;