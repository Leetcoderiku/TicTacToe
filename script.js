document.addEventListener('DOMContentLoaded', function() {
    var board = ['', '', '', '', '', '', '', '', ''];
    var currentPlayer = 'X';
  
    function makeMove(cellIndex) {
      if (board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
  
        if (checkWin(currentPlayer)) {
          alert(currentPlayer + ' wins!');
          resetBoard();
          return;
        }
  
        if (checkDraw()) {
          alert('It\'s a draw!');
          resetBoard();
          return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  
    function checkWin(player) {
      var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] === player && board[b] === player && board[c] === player) {
          return true;
        }
      }
  
      return false;
    }
  
    function checkDraw() {
      return board.every(cell => cell !== '');
    }
  
    function resetBoard() {
      board = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';
  
      var cells = document.getElementsByClassName('cell');
      for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
      }
    }
  
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', function() {
        var cellIndex = Array.from(cells).indexOf(this);
        makeMove(cellIndex);
      });
    }
  });
  