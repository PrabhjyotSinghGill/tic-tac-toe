import React from "react";
import './block.css';
import TicTacToe from "../tic-tac-toe/tic-tac-toe";

export default class Block extends React.Component{
    VALUE_BLANK = '';
    VALUE_O = 'O';
    VALUE_X = 'X';


    constructor() {
        super();
        this.state = {
            value: this.VALUE_BLANK
        };
    }

    handleClick() {
        if(this.state.value !== this.VALUE_BLANK) {
            return;
        }
        if(this.props.whoseTurn === TicTacToe.PLAYER1_TURN) {
            this.setState({
                value: this.VALUE_X
            });
        } else {
            this.setState({
                value: this.VALUE_O
            })
        }
        this.props.toggleTurnFunction();
    }

    render(){
        return<div className='tic-tac-toe-block' onClick={this.handleClick.bind(this)}>
            {this.state.value}
        </div>
    }
}