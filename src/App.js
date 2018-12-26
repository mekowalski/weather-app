//Main file working, React COmponent
import React from 'react' //import react object from react package in package.json

//this class creates an instance of App and extends React.Component that is an object that lives in
//node_modules
class App extends React.Component {
  render() {
    return (
      //JSX compiled with Babel
      //purpose of React is to have multiple files containing UI code
      //and import those files into one single file
      //then that one single file gets exported onto the main index.html
      //lastly the main index.html is what you see in browser
      <div>
        <p>Hello Weather App Users</p>
      </div>
    );
  }
}

//in order for other files to import this Component successfully, need to export this file at the bottom
export default App //tells file that this Component is accessible
