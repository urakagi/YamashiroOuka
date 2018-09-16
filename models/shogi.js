const Piece = require('./piece');

class Board {

    constructor() {
        this.board = [];
    }

    clearBoard() {
    // 盤は左上から右下へ、0-based
        for (let i = 0; i < 9; i++) {
            this.board[i] = [];
            for (let j = 0; j < 9; j++) {
                this.board[i][j] = null;
            }
        }
    }

    initializeHirate() {
        this.clearBoard();
        let line1 = [Piece.LANCE, Piece.KNIGHT, Piece.SILVER, Piece.GOLD, Piece.KING,
            Piece.GOLD, Piece.SILVER, Piece.KNIGHT, Piece.LANCE];
        for (let i = 0; i < 2; i++) {
            // 一段目を並べる
            let color = i == 0 ? Piece.WHITE : Piece.BLACK;
            let line = color == Piece.WHITE ? 0 : 8;
            for (let j in line1) {
                this.board[line][j] = new Piece(line1[j], color);
            }
            // 歩を並べる
            line = color == Piece.WHITE ? 2 : 6;
            for (let k = 0; k < 9; k++) {
                this.board[line][k] = new Piece(Piece.PAWN, color);
            }
        }
        // 大駒を並べる
        this.board[1][1] = new Piece(Piece.ROOK, Piece.WHITE);
        this.board[1][7] = new Piece(Piece.BISHOP, Piece.WHITE);
        this.board[7][1] = new Piece(Piece.BISHOP, Piece.BLACK);
        this.board[7][7] = new Piece(Piece.ROOK, Piece.BLACK);

        for (let a = 0; a < 9; a++) {
            let l = '';
            for (let b = 0; b < 9; b++) {
                if (this.board[a][b] == null) {
                    l += '　';
                } else {
                    l += this.board[a][b].char;
                }
            }
            console.log(l);
        }
    }
}

new Board().initializeHirate();

module.exports = Board;