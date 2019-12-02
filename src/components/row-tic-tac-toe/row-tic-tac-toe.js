import React from 'react';
import Block from "../block/block";
import './row-tic-tac-tow.css';

export default class RowTicTacToe extends React.Component{
    render(){
        return <div className='row-tic-tac-toe'>
            <Block></Block>
            <Block></Block>
            <Block></Block>
        </div>
    }
}