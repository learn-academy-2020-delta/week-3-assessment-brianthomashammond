// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge
// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) Import the child component Dice to this parent component so that Dice can be called and rendered on the page
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  constructor(props){
    super(props)
    // 2)Create the state object which holds the attributes that can be passed as props and updated in the virtual DOM in order to change what is displayed on the page
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 3) Destructure the rollImages and diceLog properties in order to prevent repetition and keeping the code dry
    let { rollImages, diceLog } = this.state
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    // 4) Create a variable to hold the filepath to the image selected by using the random number method to choose an index of the rollImages array
    let newRoll = rollImages[randomNum]
    // 5) Changes the state of Board so that the page can be updated. currentPic is set to newRoll and new roll is appended to the end of the diceLog array.
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        )
        // 6 This is the component call of the child component Dice. Dice is being passed two props, this.handleRoll and currentPic to roll and currentPic respectively.
        <Dice
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default Board



// src/component/Dice.js

import React, { Component } from 'react'

class Dice extends Component{
  // 7) This is Dice's render call. It contains the information that will be displayed when Dice is called by its parent component.
  render(){
    // 8) currentPic and roll are destructured, eliminating the need to type this.props beforehand.
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          // 9) This is alt text, which gives information to be read by a screen reader or like technology in order to increase accessibility.
          alt="images of dice"
          // 10) This is the currentPic property that Dice is passed from Board's state and is updated every time the handleRoll function is called. It evaluates to a filepath to the appropriate image from rollImages.
          src={ currentPic }
          onClick={ roll }
        />
      </div>
    )
  }
}

export default Dice
