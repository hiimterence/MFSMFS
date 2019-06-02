import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'


class App extends React.Component{

  render(){
    return(
      <Route path="/home" 
        component = { props => 
          {
            return (
              <Home
                {...props}
              />
            )
          }
              }
            />
    )
  }

}

export default App;
