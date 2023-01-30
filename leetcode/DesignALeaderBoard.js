var Leaderboard = function () {
  this.board = {};
};
Leaderboard.prototype.addScore = function (playerId, score) {
  if (!this.board[playerId]) this.board[playerId] = score;
  else this.board[playerId] += score;
  console.log(this.board);
};

Leaderboard.prototype.top = function (K) {
  let points = Object.values(this.board).sort((a, b) => b - a);
  let counter = 0;
  for (let i = 0; i < K; i++) {
    counter += points[i];
  }
  return counter;
};

Leaderboard.prototype.reset = function (playerId) {
  if (this.board[playerId]) this.board[playerId] = 0;
};
