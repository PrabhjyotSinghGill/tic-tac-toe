import React from 'react';
import Block from "../block/block";
import './row-tic-tac-tow.css';

export default class RowTicTacToe extends React.Component{
    render(){
        return <div className='row-tic-tac-toe'>
            <Block whoseTurn={this.props.whoseTurn}
                   toggleTurnFunction={this.props.toggleTurn}
                   handlePlayerTurnRow={this.props.handlePlayerTurn}
                   y={this.props.y}
                   x={1}>
            </Block>
            <Block whoseTurn={this.props.whoseTurn}
                   toggleTurnFunction={this.props.toggleTurn}
                   handlePlayerTurnRow={this.props.handlePlayerTurn}
                   y={this.props.y}
                   x={2}>
            </Block>
            <Block whoseTurn={this.props.whoseTurn}
                   toggleTurnFunction={this.props.toggleTurn}
                   handlePlayerTurnRow={this.props.handlePlayerTurn}
                   y={this.props.y}
                   x={3}>
            </Block>
        </div>
    }
}