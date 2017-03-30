import React, { Component } from 'react';

class Page extends Component {
  render() {
    //console.log(this.props.entry) // logs the current state and the text entry
    //console.log(this.props.updateEntry) //logs the function itself
    console.log("from pages: ",this.props.logTime)

    return (
      <div className="Page">
        <div className="Welcome">
          <h2>Welcome to Dear Diary, {this.props.user}</h2>
          <h4>Entry for the Date: {this.props.logTime}</h4>
          <h4>Title:   <input type="text" className="titleSearch" value={this.props.title} onChange={this.props.updateTitle} />  </h4> 
            
            <div>
            <textarea className="Entry" placeholder="Start Writing..." cols="90" wrap="soft" rows="40" 
                onChange={this.props.updateEntry} value={this.props.entry}>
            </textarea>
            </div>

            <div>
              <div><input type="submit" className="button" value="Log" onClick={this.props.postToDB}/> </div>
              
              <input type="text" id="searchField" />
              <input type="submit" className="button" value="Get Past Entries" onClick={this.props.getFromDB}/>
            </div>
        </div>
      </div>
    );
  }
}

export default Page;