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
        let counterX = 0;
        let counterO = 0;
        
        if (state.filter(row => row.includes(null)).length === 0) {
            return null;
        };
    
        state.forEach((row) => {
            counterX += row.filter(position => position === 'X').length;
            counterO += row.filter(position => position === 'O').length;
        });
    
        if (counterX === counterO) {
            return 'X';
        } else {
            return 'O';
        };
    };

    this.result = (state, action) => {
        const newState = state.map(row => [...row]);
        newState[action[0]][action[1]] = this.turn(newState);
        return newState;
    };

    this.terminal = (state) => {

    };

    this.utility = (state) => {

    };
};