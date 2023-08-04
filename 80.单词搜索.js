/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const step = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0))
    const path = [];
    function dfs(n, row, col) {
        if (n === word.length) {
            return true
        }
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return
        if (word.charAt(n) !== board[row][col] || step[row][col]) return false


        path.push(board[row][col])
        console.log(path);
        step[row][col] = 1;
        const status = dfs(n + 1, row, col + 1) ||
            dfs(n + 1, row + 1, col) ||
            dfs(n + 1, row, col - 1) ||
            dfs(n + 1, row - 1, col)
        step[row][col] = 0;
        path.pop()
        return status
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(0, i, j)) {
                return true
            }
        }
    }
    return false
};
let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED";
console.log(exist(board, word));