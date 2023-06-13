/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || !grid.length) return 0;
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                dfs(grid, i, j)
                count++;
            }
        }
    }


    function dfs(grid, r, c) {
        // 越界，直接返回
        if (r >= grid.length || c >= grid[0].length || r < 0 || c < 0) {
            return
        }
        // 0为海洋格
        // 1为陆地格
        // 2为已走过的陆地格，为了避免重复遍历
        if (grid[r][c] != '1') return
        grid[r][c] = '2' // 标记为已走过
        dfs(grid, r - 1, c)
        dfs(grid, r + 1, c)
        dfs(grid, r, c - 1)
        dfs(grid, r, c + 1)
    }

    return count
};
console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]));
/*
// dfs遍历网格的基本框架
    function dfs(node, r, c) {
        if (isAreas(grid, r, c)) {
            return
        }
        // 0为海洋格
        // 1为陆地格
        // 2为已走过的陆地格，为了避免重复遍历
        if (grid[r][c] != 1) return // 如果是海洋馆或走过的陆地格，跳过
        grid[r][c] = 2 // 标记为已走过
        dfs(grid, r - 1, c)
        dfs(grid, r + 1, c)
        dfs(grid, r, c - 1)
        dfs(grid, r, c + 1)
    }
    function isAreas(grid, r, c) {
        return r >= 0 && r < grid.lenght && c >= 0 && c < grid[0].lenght
    }
*/