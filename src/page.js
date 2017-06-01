import React from 'react';

const Page = (props) => {
  return (
          <div className="Page">
        <div className="Welcome">
          <br></br>
          <h1>Welcome to Dear Diary, {props.user}</h1>
          <h4>Entry for the Date: {props.logTime}</h4>
          <h3>Title:   <input type="text" className="currTitle" value={props.title} onChange={props.updateTitle} />  </h3>

            <div>
              <textarea className="Entry" placeholder="Start Writing..." cols="70" wrap="soft" rows="30"
                  onChange={props.updateEntry} value={props.entry}>
              </textarea>
            </div>

            <div className="log">
              <div><input type="submit" className="button" value="Log" onClick={props.postToDB}/> </div>
            </div>
            <div className="log">
              <input type="text" id="searchField" />
              <input type="submit" className="button" value="Get Past Entries" onClick={props.getFromDB}/>
            </div>
        </div>
      </div>
  )
}

export default Page;