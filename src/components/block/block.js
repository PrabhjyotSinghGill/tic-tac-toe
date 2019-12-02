import React from "react";
import './block.css';

export default class Block extends React.Component{
    STATE_BLANK = 'state-blank';
    STATE_O = 'state-o';
    STATE_X = 'state-x';


    constructor() {
        super();
        this.state = {
            innerState: this.STATE_BLANK
        };
    }

    toggle() {
        if(this.state.innerState === this.STATE_BLANK) {
            this.setState({innerState: this.STATE_O});
        }
    }

    render(){
        return<div className='tic-tac-toe-block' onClick={() => this.toggle()}>
            {this.state.innerState === this.STATE_O ? 'O' : this.state.innerState === this.STATE_X ? 'X' : ''}
        </div>
    }
}