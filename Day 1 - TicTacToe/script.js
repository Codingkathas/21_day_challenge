const board = document.getElementById('board');
const status = document.getElementById('status');
const cells = document.querySelectorAll('.cell');
const singlePlayerBtn = document.getElementById('singlePlayer');
const multiPlayerBtn = document.getElementById('multiPlayer');
const resetBtn = document.getElementById('reset');

let currentPlayer = 'X';
let gameActive = true;
let singlePlayerMode = false;

const winCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const handleCellClick = (e) => {
  const cell = e.target;
  const cellIndex = parseInt(cell.getAttribute('data-cell'));

  if (cell.textContent !== '' || !gameActive) return;

  cell.textContent = currentPlayer;

  if (checkWin()) {
    gameActive = false;
    status.textContent = `${currentPlayer} wins!`;
    status.classList.add('winner');
    highlightWinningCombination();
    return;
  }

  if (checkDraw()) {
    gameActive = false;
    status.textContent = 'It\'s a draw!';
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  if (singlePlayerMode && currentPlayer === 'O' && gameActive) {
    setTimeout(() => {
      computerTurn();
    }, 500);
  }
};

const checkWin = () => {
  return winCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
};

const checkDraw = () => {
  return [...cells].every(cell => {
    return cell.textContent !== '';
  });
};

const computerTurn = () => {
  const emptyCells = [...cells].filter(cell => cell.textContent === '');
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  emptyCells[randomIndex].textContent = currentPlayer;

  if (checkWin()) {
    gameActive = false;
    status.textContent = `${currentPlayer} wins!`;
    status.classList.add('winner');
    highlightWinningCombination();
    return;
  }

  if (checkDraw()) {
    gameActive = false;
    status.textContent = 'It\'s a draw!';
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const highlightWinningCombination = () => {
  winCombinations.forEach(combination => {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      cells[a].classList.add('win');
      cells[b].classList.add('win');
      cells[c].classList.add('win');
    }
  });
};

const resetGame = () => {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('win');
  });
  status.textContent = '';
  status.classList.remove('winner');
  gameActive = true;
  currentPlayer = 'X';
};

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

singlePlayerBtn.addEventListener('click', () => {
  singlePlayerMode = true;
  resetGame();
});

multiPlayerBtn.addEventListener('click', () => {
  singlePlayerMode = false;
  resetGame();
});

resetBtn.addEventListener('click', resetGame);
