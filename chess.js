function chess(kingB, kingW, queen, bishop, knight) {
    //Qayl 1. Gtnenq figurneri koordinatner@	
    let board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    }

    let kingBX = board[kingB[0]];
    let kingBY = parseInt(kingB[1]);

    let kingWX = board[kingW[0]];
    let kingWY = parseInt(kingW[1]);

    let queenX = board[queen[0]];
    let queenY = parseInt(queen[1]);

    let bishopX = board[bishop[0]];
    let bishopY = parseInt(bishop[1]);

    let knightX = board[knight[0]];
    let knightY = parseInt(knight[1]);



    //Qayl 2. Stexcenq 5 zangvac voroncic yuraqanchyurum klinen hamapatasxan figurneri azat qayleri koordinatner@
    var arrKingB = [];
    for (var i = kingBX - 1; i <= kingBX + 1; i++) {
        for (var j = kingBY - 1; j <= kingBY + 1; j++) {
            if (i < 1 || i > 8) {
                continue;
            }
            if (j < 1 || j > 8) {
                continue;
            }
            if (i == kingBX && j == kingBY || i == queenX && j == queenY || i == bishopX && j == bishopY ||
                i == knightX && j == knightY) {
                continue;
            }
            var arr = [i, j];
            arrKingB.push(arr);
        }
    }

    var arrKingW = [];
    for (var i = kingWX - 1; i <= kingWX + 1; i++) {
        for (var j = kingWY - 1; j <= kingWY + 1; j++) {
            if (i < 1 || i > 8) {
                continue;
            }
            if (j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY || i == queenX && j == queenY || i == bishopX && j == bishopY ||
                i == knightX && j == knightY) {
                continue;
            }
            var arr = [i, j];
            arrKingW.push(arr);
        }
    }


    ///////////////////////////////////////////////////////////////////////////////////////
    var arrQueen = [];
    for (var i = queenX + 1; i <= 8; i++) {
        if (i < 1 || i > 8) {
            continue;
        }
        if (i == kingWX && queenY == kingWY || i == bishopX && queenY == bishopY || i == knightX &&
            queenY == knightY) {
            break;
        }
        var arr = [i, queenY];
        arrQueen.push(arr);
    }
    for (var i = queenX - 1; i >= 1; i--) {
        if (i < 1 || i > 8) {
            continue;
        }
        if (i == kingWX && queenY == kingWY || i == bishopX && queenY == bishopY || i == knightX &&
            queenY == knightY) {
            break;
        }
        var arr = [i, queenY];
        arrQueen.push(arr);
    }
    for (var i = queenY + 1; i <= 8; i++) {
        if (i < 1 || i > 8) {
            continue;
        }
        if (i == kingWY && queenX == kingWX || i == bishopY && queenX == bishopX || i == knightY &&
            queenX == knightX) {
            break;
        }
        var arr = [queenX, i];
        arrQueen.push(arr);
    }
    for (var i = queenY - 1; i >= 1; i--) {
        if (i < 1 || i > 8) {
            continue;
        }
        if (i == kingWY && queenX == kingWX || i == bishopY && queenX == bishopX || i == knightY &&
            queenX == knightX) {
            break;
        }
        var arr = [queenX, i];
        arrQueen.push(arr);
    }

    var k = true;
    for (var i = queenX + 1; i <= 8; i++) {
        for (var j = queenY + 1; j <= 8; j++) {
            var XminusY = queenX - queenY;
            if (i < 1 || i > 8 || j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY && i - j == XminusY ||
                i == bishopX && j == bishopY && i - j == XminusY ||
                i == knightX && j == knightY && i - j == XminusY) {
                k = false;
            }
            if (i - j == XminusY && k != false) {
                var arr = [i, j];
                arrQueen.push(arr);
            }
        }
        if (k == false) {
            break;
        }
    }


    var k = true;
    for (var i = queenX - 1; i >= 1; i--) {
        for (var j = queenY - 1; j >= 1; j--) {
            var XminusY = queenX - queenY;
            if (i < 1 || i > 8 || j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY && i - j == XminusY ||
                i == bishopX && j == bishopY && i - j == XminusY ||
                i == knightX && j == knightY && i - j == XminusY) {
                k = false;
            }
            if (i - j == XminusY && k != false) {
                var arr = [i, j];
                arrQueen.push(arr);
            }
        }
        if (k == false) {
            break;
        }
    }

    var k = true;
    for (var i = queenX - 1; i >= 1; i--) {
        for (var j = queenY + 1; j <= 8; j++) {
            var XplusY = queenX + queenY;
            if (i < 1 || i > 8 || j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY && i + j == XplusY ||
                i == bishopX && j == bishopY && i + j == XplusY ||
                i == knightX && j == knightY && i + j == XplusY) {
                k = false;
            }
            if (i + j == XplusY && k != false) {
                var arr = [i, j];
                arrQueen.push(arr);
            }
        }
        if (k == false) {
            break;
        }
    }
    var k = true;
    for (var i = queenX + 1; i <= 8; i++) {
        for (var j = queenY - 1; j >= 1; j--) {
            var XplusY = queenX + queenY;
            if (i < 1 || i > 8 || j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY && i + j == XplusY ||
                i == bishopX && j == bishopY && i + j == XplusY ||
                i == knightX && j == knightY && i + j == XplusY) {
                k = false;
            }
            if (i + j == XplusY && k != false) {
                var arr = [i, j];
                arrQueen.push(arr);
            }
        }
        if (k == false) {
            break;
        }
    }
    //return arrQueen;
    /////////////////////////////////////////////////////////////	

    var arrBishop = [];
    var k = true;
    for (var i = bishopX + 1; i <= 8; i++) {
        for (var j = bishopY + 1; j <= 8; j++) {
            var XminusY = bishopX - bishopY;
            if (i < 1 || i > 8 || j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY && i - j == XminusY ||
                i == queenX && j == queenY && i - j == XminusY ||
                i == knightX && j == knightY && i - j == XminusY) {
                k = false;
            }
            if (i - j == XminusY && k != false) {
                var arr = [i, j];
                arrBishop.push(arr);
            }
        }
        if (k == false) {
            break;
        }
    }
    var k = true;
    for (var i = bishopX - 1; i >= 1; i--) {
        for (var j = bishopY - 1; j >= 1; j--) {
            var XminusY = bishopX - bishopY;
            if (i < 1 || i > 8 || j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY && i - j == XminusY ||
                i == queenX && j == queenY && i - j == XminusY ||
                i == knightX && j == knightY && i - j == XminusY) {
                k = false;
            }
            if (i - j == XminusY && k != false) {
                var arr = [i, j];
                arrBishop.push(arr);
            }
        }
        if (k == false) {
            break;
        }
    }
    var k = true;
    for (var i = bishopX - 1; i >= 1; i--) {
        for (var j = bishopY + 1; j <= 8; j++) {
            var XplusY = bishopX + bishopY;
            if (i < 1 || i > 8 || j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY && i + j == XplusY ||
                i == queenX && j == queenY && i + j == XplusY ||
                i == knightX && j == knightY && i + j == XplusY) {
                k = false;
            }
            if (i + j == XplusY && k != false) {
                var arr = [i, j];
                arrBishop.push(arr);
            }
        }
        if (k == false) {
            break;
        }
    }
    var k = true;
    for (var i = bishopX + 1; i <= 8; i++) {
        for (var j = bishopY - 1; j >= 1; j--) {
            var XplusY = bishopX + bishopY;
            if (i < 1 || i > 8 || j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY && i + j == XplusY ||
                i == queenX && j == queenY && i + j == XplusY ||
                i == knightX && j == knightY && i + j == XplusY) {
                k = false;
            }
            if (i + j == XplusY && k != false) {
                var arr = [i, j];
                arrBishop.push(arr);
            }
        }
        if (k == false) {
            break;
        }
    }
    //return arrBishop;
    ////////////////////////////////////////DZi
    var arrKnight = [];
    for (var i = knightX - 2; i <= knightX + 2; i++) {
        for (var j = knightY - 2; j <= knightY + 2; j++) {
            var XminusY = knightX - knightY;
            var XplusY = knightX + knightY;
            if (i < 1 || i > 8 || j < 1 || j > 8) {
                continue;
            }
            if (i == kingWX && j == kingWY || i == queenX && j == queenY || i == bishopX && j == bishopY) {
                continue;
            }
            if (i + j != XplusY && i - j != XminusY && i != knightX && j != knightY) {
                var arr = [i, j];
                arrKnight.push(arr);
            }
        }
    }


    ////////////////////////////////////////////////////////////////////
    //Qayl 3. Severi tagavori zangvacic jnjenq ayn koordinatner@ voronq patkanum en nayev spitakneri voreve figuri
    for (var i = 0; i < arrKingW.length; i++) {
        var arr = arrKingW[i];
        for (var k = 0; k < arrKingB.length; k++) {
            if (arrKingB[k][0] == arr[0] && arrKingB[k][1] == arr[1]) {
                arrKingB.splice(k, 1)
            }
        }
    }

    for (var i = 0; i < arrQueen.length; i++) {
        var arr = arrQueen[i];
        for (var k = 0; k < arrKingB.length; k++) {
            if (arrKingB[k][0] == arr[0] && arrKingB[k][1] == arr[1]) {
                arrKingB.splice(k, 1)
            }
        }
    }

    for (var i = 0; i < arrBishop.length; i++) {
        var arr = arrBishop[i];
        for (var k = 0; k < arrKingB.length; k++) {
            if (arrKingB[k][0] == arr[0] && arrKingB[k][1] == arr[1]) {
                arrKingB.splice(k, 1)
            }
        }
    }

    for (var i = 0; i < arrKnight.length; i++) {
        var arr = arrKnight[i];
        for (var k = 0; k < arrKingB.length; k++) {
            if (arrKingB[k][0] == arr[0] && arrKingB[k][1] == arr[1]) {
                arrKingB.splice(k, 1)
            }
        }
    }
    //Qayl 4. Ete severi tagavori zangvacum derevs ka aynpisi koordinat, vor@ chka mnacac 4-i mej apa da der mat che.
    if (arrKingB.length == 0) {
        return true;
    }
    return false

}
console.log(chess("d4", "a2", "c5", "f3", "c4"))