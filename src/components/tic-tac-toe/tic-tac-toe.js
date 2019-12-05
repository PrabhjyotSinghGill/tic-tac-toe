import React from 'react';
import RowTicTacToe from "../row-tic-tac-toe/row-tic-tac-toe";
import './tic-tac-toe.css';

export default class TicTacToe extends React.Component {
    static PLAYER1_TURN = 'player-1';
    static PLAYER2_TURN = 'player-2';

    constructor() {
        super();
        this.player1Points = [];
        this.player2Points = [];
        this.state = {
            whoseTurn: TicTacToe.PLAYER1_TURN
        };
    }

    toggleTurn() {
        let whoseTurn = this.state.whoseTurn;
        if(whoseTurn === TicTacToe.PLAYER1_TURN) {
            whoseTurn = TicTacToe.PLAYER2_TURN;
        } else {
            whoseTurn = TicTacToe.PLAYER1_TURN;
        }
        this.setState({
            whoseTurn: whoseTurn
        });
    }

    handlePlayerTurn(x, y) {
        if(this.state.whoseTurn == TicTacToe.PLAYER1_TURN) {
            this.player1Points.push([x,y]);
            let result = this.doesPlayerWin(this.player1Points);
            if(result){
                this.endGame('Player 1 wins');
            }
        } else  {
            this.player2Points.push([x,y]);
            let result = this.doesPlayerWin(this.player2Points);
            if(result) {
                this.endGame('Player 2 wins');
            }
        }
    }

    doesPlayerWin(playerPoints) {
        let countx = [0, 0, 0];
        let county = [0, 0, 0];
        let countXequalsY = 0;
        let countXY4 = 0;
        for(let i=0; i < playerPoints.length; i++) {
            let point = playerPoints[i];
            let x = point[0];
            let y = point[1];
            if(x === y) {
                countXequalsY++;
            }
            if(x + y === 4) {
               countXY4++;
            }
            countx[x-1]++;
            county[y-1]++;
            if(countx[x-1] >= 3 || county[y-1] >= 3 || countXequalsY >= 3 || countXY4 >= 3) {
                return true;
            }
        }
        return false;
    }

    endGame(message) {
        alert(message);
    }

    render(){
        return <div className='tic-tac-toe'>
            <RowTicTacToe whoseTurn={this.state.whoseTurn}
                          toggleTurn={this.toggleTurn.bind(this)}
                          handlePlayerTurn={this.handlePlayerTurn.bind(this)}
                          y={1}>
            </RowTicTacToe>
            <RowTicTacToe whoseTurn={this.state.whoseTurn}
                          toggleTurn={this.toggleTurn.bind(this)}
                          handlePlayerTurn={this.handlePlayerTurn.bind(this)}
                          y={2}>
            </RowTicTacToe>
            <RowTicTacToe whoseTurn={this.state.whoseTurn}
                          toggleTurn={this.toggleTurn.bind(this)}
                          handlePlayerTurn={this.handlePlayerTurn.bind(this)}
                          y={3}>
            </RowTicTacToe>
        </div>
    }
}