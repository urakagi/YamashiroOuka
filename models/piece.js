class Piece {
    constructor(type, color, promotion = false) {
        this.type = type;
        this.color = color;
            this.promotion = promotion;
    }

    get char() {
        return ['玉','飛','角','金','銀','桂','香','歩'][this.type];
    }

    static get KING() {
        return 0;
    }
    static get ROOK() {
        return 1;
    }
    static get BISHOP() {
        return 2;
    }
    static get GOLD() {
        return 3;
    }
    static get SILVER() {
        return 4;
    }
    static get KNIGHT() {
        return 5;
    }
    static get LANCE() {
        return 6;
    }
    static get PAWN() {
        return 7;
    }

    static get BLACK() {
        return 0;
    }
    static get WHITE() {
        return 1;
    }
}

module.exports = Piece;

