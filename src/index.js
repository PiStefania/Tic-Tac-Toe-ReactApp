import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Function Component (contains only the 'render' function)
function Square(props) {
    return (
        <button 
            className="square"
            onClick={() => { alert('Clicked button cell: ' + props.valueCell); props.onClick();}} 
            //onClick={props.onClick}
            >
            {props.value}
        </button>
    );
}
  
// Parent Component (Takes control of children's states)
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();     // Create a copy of the state's squares -> immutability
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return <Square 
            value={this.state.squares[i]} 
            valueCell={i}
            onClick={() => this.handleClick(i)}
        />;
    }
  
    render() {
        const status = 'Next player: X';
  
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
  }
  
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
  }
  
// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  