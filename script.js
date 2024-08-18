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

function Gameflow() {
    this.actions = (state) => {
        actions = [];

        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++) {
                if (state[i][j] === null) {
                    actions.push([i, j]);
                };
            };
        };

        return actions;
    };

    this.turn = (state) => {

    };

    this.result = (state, action) => {

    };

    this.terminal = (state) => {

    };

    this.utility = (state) => {

    };
};