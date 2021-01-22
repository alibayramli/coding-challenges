function validSolution(board) {
    let rowValidity = board.map(row => {
        return [...new Set(row)].length === 9 && !row.includes(0);
    })
    if (rowValidity.includes(false)) return false;
    let columnValidity = board.map((_, idx) => {
        return [...new Set(board.map((col) => col[idx]))].length === 9;
    });
    if (columnValidity.includes(false)) return false;
    const subBlocks = [];
    for (let count = 0; count < 3; count++) {
        for (let i = 0; i < 9; i += 3) {
            subBlocks.push(board[i].slice(0, 3)
                .concat(board[i + 1].slice(0, 3))
                .concat(board[i + 2].slice(0, 3)));
        }
    }
    const blockValidity = subBlocks.map(block => {
        if ([...new Set(block)].length !== 9) return false;
    })
    if (blockValidity.includes(false)) return false;
    return true;
}