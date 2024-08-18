function Gameboard() {
    const board = Array.from({ length: 3 }, () => Array(3).fill(null));

    this.board = board;
    this.state = () => board.map(row => row.slice());
};

function Player(name, marker, ai=false) {
    this.name = name;
    this.marker = marker;
    this.ai = ai;
    this.makeMove = (gameboard, action) => gameboard.board[action[0]][action[1]] = marker;
};