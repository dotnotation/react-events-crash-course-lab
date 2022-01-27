import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  // note that there is no state in this app
  // the functions from canvasHelpers are not props
  // they are functions exported so you can't call them via this.props
  // just invoke them like regular functions

  handleMouseMove = (event) => {
    console.log(event)
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  // in the console.log I saw that the there was a clientX property of the event
  // this client is the mouse so that is why it is event.clientX
  // also make sure you camelCase it as clientx does not work

      /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }
  // when the statement is just an else, it can't take in an argument so it has to be else if

  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        onClick={() => {toggleCycling()}}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
  // event listeners are added into the render() method
}
