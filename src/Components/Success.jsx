import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import RaisedButton from 'material-ui/RaisedButton'
import List, { ListItem } from 'material-ui/List'

export class Success extends Component {
  
  render() {

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success"/>
             <h1>Thank You For Your Submission</h1>
             <p>you will be responded for further instruction</p>
          
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles ={
  button:{
    margin: 15
  }
}


export default Success
