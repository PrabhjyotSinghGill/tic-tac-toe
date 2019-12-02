import React from 'react';
import RowTicTacToe from "../row-tic-tac-toe/row-tic-tac-toe";
import './tic-tac-toe.css';

export default class TicTacToe extends React.Component {
    render(){
        return <div className='tic-tac-toe'>
            <RowTicTacToe></RowTicTacToe>
            <RowTicTacToe></RowTicTacToe>
            <RowTicTacToe></RowTicTacToe>
        </div>
    }
}