$(document).ready(function(){
  var npl = document.getElementById("numPlayers");
  var pl1 = document.getElementById("player1");
  var pl2 = document.getElementById("player2");
  var bd = document.getElementById("board");
  var tn = document.getElementById("turn");
  var sb = document.getElementById("symbol");
  var sbX = document.getElementById("symbolX");
  var sbO = document.getElementById("symbolO");
  var res = document.getElementById("resGame");
  var rstGame = document.getElementById("resetGame");
  var cell00 = document.getElementById("cl00");
  var cell01 = document.getElementById("cl01");
  var cell02 = document.getElementById("cl02");
  var cell10 = document.getElementById("cl10");
  var cell11 = document.getElementById("cl11");
  var cell12 = document.getElementById("cl12");
  var cell20 = document.getElementById("cl20");
  var cell21 = document.getElementById("cl21");
  var cell22 = document.getElementById("cl22");
  var scoreText = document.getElementById("score");

  var numTurn = 0;
  var plNum = 1;
  var pl1Smb  = "";
  var pl2Smb  = "";
  var game = [[{name: "cl00", clicked: false, value: ""}, {name: "cl01", clicked: false, value: ""}, {name: "cl02", clicked: false, value: ""}], [{name: "cl10", clicked: false, value: ""}, {name: "cl11", clicked: false, value: ""}, {name: "cl12", clicked: false, value: ""}], [{name: "cl20", clicked: false, value: ""}, {name: "cl21", clicked: false, value: ""}, {name: "cl22", clicked: false, value: ""}], {playerNum: 1}, {pl1Symbol: "X"}, {pl2Symbol: "O"}];
  var scoreArray = [0, 0];
  pl1.addEventListener("click", play1);
  pl2.addEventListener("click", play2);
  sbX.addEventListener("click", setSymbolX);
  sbO.addEventListener("click", setSymbolO);
  rstGame.addEventListener("click", resetGame);
  cell00.addEventListener("click", setCell00);
  cell01.addEventListener("click", setCell01);
  cell02.addEventListener("click", setCell02);
  cell10.addEventListener("click", setCell10);
  cell11.addEventListener("click", setCell11);
  cell12.addEventListener("click", setCell12);
  cell20.addEventListener("click", setCell20);
  cell21.addEventListener("click", setCell21);
  cell22.addEventListener("click", setCell22);

  function writeScore(winner, loser, idxWinner, idxLoser) {
    console.log(winner, loser, game)
    res.style.display = "inline-block";
    res.innerHTML = winner + " won!";
    scoreArray[idxWinner]++;
    scoreText.style.display = "inline-block";
    scoreText.innerHTML = winner + ": " + scoreArray[idxWinner] + " | " + loser + ": " + scoreArray[idxLoser];
    return;
  }
  function checkVictory() {
    for (i=0; i<game.length-3; i++) {
      if (((game[i][0].clicked == true) && (game[i][1].clicked == true) && (game[i][2].clicked == true)) && (((game[i][0].value == "X") && (game[i][1].value == "X") && (game[i][2].value == "X")) || ((game[i][0].value == "O") && (game[i][1].value == "O") && (game[i][2].value == "O")))) {
        if (game[i][0].value == "X") {
          if (game[game.length-2].pl1Symbol == "X") {
            if (game[game.length-3].playerNum == 1) {
              writeScore("You", "Computer", 0, 1);
              return true;
            } else {
              writeScore("Player1", "Player2", 0, 1);
              return true;
            }
          } else {
            if (game[game.length-3].playerNum == 1) {
              writeScore("Computer", "You", 1, 0);
              return true;
            } else {
              writeScore("Player2", "Player1", 1, 0);
              return true;
            }
          }
        } else {
          if (game[game.length-2].pl1Symbol == "O") {
            if (game[game.length-3].playerNum == 1) {
              writeScore("You", "Computer", 0, 1);
              return true;
            } else {
              writeScore("Player1", "Player2", 0, 1);
              return true;
            }
          } else {
            if (game[game.length-3].playerNum == 1) {
              writeScore("Computer", "You", 1, 0);
              return true;
            } else {
              writeScore("Player2", "Player1", 1, 0);
              return true;
            }
          }
        }
      }
      if (((game[0][i].clicked == true) && (game[1][i].clicked == true) && (game[2][i].clicked == true)) && (((game[0][i].value == "X") && (game[1][i].value == "X") && (game[2][i].value == "X")) || ((game[0][i].value == "O") && (game[1][i].value == "O") && (game[2][i].value == "O")))) {
        if (game[0][i].value == "X") {
          if (game[game.length-2].pl1Symbol == "X") {
            if (game[game.length-3].playerNum == 1) {
              writeScore("You", "Computer", 0, 1);
              return true;
            } else {
              writeScore("Player1", "Player2", 0, 1);
              return true;
            }
          } else {
            if (game[game.length-3].playerNum == 1) {
              writeScore("Computer", "You", 1, 0);
              return true;
            } else {
              writeScore("Player2", "Player1", 1, 0);
              return true;
            }
          }
        } else {
          if (game[game.length-2].pl1Symbol == "O") {
            if (game[game.length-3].playerNum == 1) {
              writeScore("You", "Computer", 0, 1);
              return true;
            } else {
              writeScore("Player1", "Player2", 0, 1);
              return true;
            }
          } else {
              if (game[game.length-3].playerNum == 1) {
                writeScore("Computer", "You", 1, 0);
                return true;
              } else {
                writeScore("Player2", "Player1", 1, 0);
                return true;
              }
          }
        }
      }
    }
    if (((game[0][0].clicked == true) && (game[1][1].clicked == true) && (game[2][2].clicked == true)) && (((game[0][0].value == "X") && (game[1][1].value == "X") && (game[2][2].value == "X")) || ((game[0][0].value == "O") && (game[1][1].value == "O") && (game[2][2].value == "O")))) {
      if (game[0][0].value == "X") {
        if (game[game.length-2].pl1Symbol == "X") {
          if (game[game.length-3].playerNum == 1) {
            writeScore("You", "Computer", 0, 1);
            return true;
          } else {
            writeScore("Player1", "Player2", 0, 1);
            return true;
          }
        } else {
          if (game[game.length-3].playerNum == 1) {
            writeScore("Computer", "You", 1, 0);
            return true;
          } else {
            writeScore("Player2", "Player1", 1, 0);
            return true;
          }
        }
      } else {
        if (game[game.length-2].pl1Symbol == "O") {
          if (game[game.length-3].playerNum == 1) {
            writeScore("You", "Computer", 0, 1);
            return true;
          } else {
            writeScore("Player1", "Player2", 0, 1);
            return true;
          }
        } else {
          if (game[game.length-3].playerNum == 1) {
            writeScore("Computer", "You", 1, 0);
            return true;
          } else {
            writeScore("Player2", "Player1", 1, 0);
            return true;
          }
        }
      }
    }
    if (((game[0][2].clicked == true) && (game[1][1].clicked == true) && (game[2][0].clicked == true)) && (((game[0][2].value == "X") && (game[1][1].value == "X") && (game[2][0].value == "X")) || ((game[0][2].value == "O") && (game[1][1].value == "O") && (game[2][0].value == "O")))) {
      if (game[0][2].value == "X") {
        if (game[game.length-2].pl1Symbol == "X") {
          if (game[game.length-3].playerNum == 1) {
            writeScore("You", "Computer", 0, 1);
            return true;
          } else {
            writeScore("Player1", "Player2", 0, 1);
            return true;
          }
        } else {
          if (game[game.length-3].playerNum == 1) {
            writeScore("Computer", "You", 1, 0);
            return true;
          } else {
            writeScore("Player2", "Player1", 1, 0);
            return true;
          }
        }
      } else {
        if (game[game.length-2].pl1Symbol == "O") {
          if (game[game.length-3].playerNum == 1) {
            writeScore("You", "Computer", 0, 1);
            return true;
          } else {
            writeScore("Player1", "Player2", 0, 1);
            return true;
          }
        } else {
          if (game[game.length-3].playerNum == 1) {
            writeScore("Computer", "You", 1, 0);
            return true;
          } else {
            writeScore("Player2", "Player1", 1, 0);
            return true;
          }
        }
      }
    }
    return false;
  }

  function resetBoard() {
    game = [[{name: "cl00", clicked: false, value: ""}, {name: "cl01", clicked: false, value: ""}, {name: "cl02", clicked: false, value: ""}], [{name: "cl10", clicked: false, value: ""}, {name: "cl11", clicked: false, value: ""}, {name: "cl12", clicked: false, value: ""}], [{name: "cl20", clicked: false, value: ""}, {name: "cl21", clicked: false, value: ""}, {name: "cl22", clicked: false, value: ""}], {playerNum: plNum}, {pl1Symbol: pl1Smb}, {pl2Symbol: pl2Smb}];
    numTurn = 0;
    tn.style.display = "none";
    tn.innerHTML = "";
    $("#cl00").html("&nbsp;");
    $("#cl01").html("&nbsp;");
    $("#cl02").html("&nbsp;");
    $("#cl10").html("&nbsp;");
    $("#cl11").html("&nbsp;");
    $("#cl12").html("&nbsp;");
    $("#cl20").html("&nbsp;");
    $("#cl21").html("&nbsp;");
    $("#cl22").html("&nbsp;");
    return;
  }
  function resetGame() {
    resetBoard();
    plNum = 1;
    pl1Smb  = "";
    pl2Smb  = "";
    scoreArray = [0, 0];
    npl.style.display = "inline-block";
    npl.innerHTML = "Choose number of players:"
    pl1.style.display = "inline-block";
    pl2.style.display = "inline-block";
    sb.style.display = "none";
    scoreText.style.display = "none";
    res.style.display = "none";
    return;
  }
  function writeCell(row, col) {
    game[row][col].clicked = true;
    game[row][col].value = game[game.length-1].pl2Symbol;
    document.getElementById("cl"+row.toString()+col.toString()).innerHTML = game[game.length-1].pl2Symbol;
    return;
  }
  function checkPair(symb2Check) {
    for (i=0; i<game.length-3; i++) {
    	for (k=0; k<2; k++) {
      	if (((game[i][k].clicked == true) && (game[i][k+1].clicked == true)) && ((game[i][k].value == symb2Check) && (game[i][k+1].value == symb2Check))) {
          if (k == 0) {
            if (game[i][2].clicked == false) {
              writeCell(i, 2);
              return true;
            }
          } else {
            if (game[i][0].clicked == false) {
              writeCell(i, 0);
              return true;
            }
          }
        }
        if (((game[k][i].clicked == true) && (game[k+1][i].clicked == true)) && ((game[k][i].value == symb2Check) && (game[k+1][i].value == symb2Check))) {
          if (k == 0) {
            if (game[2][i].clicked == false) {
              writeCell(2, i);
              return true;
            }
          } else {
            if (game[0][i].clicked == false) {
              writeCell(0, i);
              return true;
            }
          }
        }
      }
      if (((game[i][0].clicked == true) && (game[i][2].clicked == true)) && ((game[i][0].value == symb2Check) && (game[i][2].value == symb2Check))) {
        if (game[i][1].clicked == false) {
          writeCell(i, 1);
          return true;
        }
      }
      if (((game[0][i].clicked == true) && (game[2][i].clicked == true)) && ((game[0][i].value == symb2Check) && (game[2][i].value == symb2Check))) {
        if (i<2) {
          if (game[1][i].clicked == false) {
            writeCell(1, i);
            return true;
          }
        } else {
          if (game[1][2].clicked == false) {
            writeCell(1, 2);
            return true;
          }
        }
      }
    }
    if (((game[0][2].clicked == true) && (game[1][1].clicked == true)) && ((game[0][2].value == symb2Check) && (game[1][1].value == symb2Check))) {
      if (game[2][0].clicked == false) {
        writeCell(2, 0);
        return true;
      }
    }
    if (((game[0][2].clicked == true) && (game[2][0].clicked == true)) && ((game[0][2].value == symb2Check) && (game[2][0].value == symb2Check))) {
      if (game[1][1].clicked == false) {
        writeCell(1, 1);
        return true;
      }
    }
    if (((game[1][1].clicked == true) && (game[2][0].clicked == true)) && ((game[1][1].value == symb2Check) && (game[2][0].value == symb2Check))) {
      if (game[0][2].clicked == false) {
        writeCell(0, 2);
        return true;
      }
    }
    if (((game[0][0].clicked == true) && (game[1][1].clicked == true)) && ((game[0][0].value == symb2Check) && (game[1][1].value == symb2Check))) {
      if (game[2][2].clicked == false) {
        writeCell(2, 2);
        return true;
      }
    }
    if (((game[2][2].clicked == true) && (game[1][1].clicked == true)) && ((game[2][2].value == symb2Check) && (game[1][1].value == symb2Check))) {
      if (game[0][0].clicked == false) {
        writeCell(0, 0);
        return true;
      }
    }
    return false;
  }
  function checkWinOrDraw() {
    numTurn++;
    if (checkVictory()) {
      resetBoard();
      return;
    } else {
      if (numTurn !== 9) {
        tn.innerHTML = "Your turn";
        return;
      } else {
        res.style.display = "inline-block";
        res.innerHTML = "It was a draw!"
        scoreText.style.display = "inline-block";
        scoreText.innerHTML = "You: " + scoreArray[0] + " | " + "Computer: " + scoreArray[1];
        resetBoard();
        return;
      }
    }
  }
  function computerSetCell(row, col) {
    game[row][col].clicked = true;
    game[row][col].value = game[game.length-1].pl2Symbol;
    numTurn++;
    document.getElementById("cl"+row.toString()+col.toString()).innerHTML = game[game.length-1].pl2Symbol;
    if (checkVictory()) {
      resetBoard();
      return;
    } else {
      tn.innerHTML = "Your turn";
      return;
    }
  }
  function computerGame() {
    if (checkPair(game[game.length-1].pl2Symbol)) {
      checkWinOrDraw();
      return;
    }
    if (checkPair(game[game.length-2].pl1Symbol)) {
      checkWinOrDraw();
      return;
    }
    if (game[1][1].clicked == false) {
      computerSetCell(1, 1);
      return;
    } else {
      if (game[0][0].clicked == false) {
        computerSetCell(0, 0);
        return;
      } else {
        if (game[0][2].clicked == false) {
          computerSetCell(0, 2);
          return;
        } else {
          if (game[2][0].clicked == false) {
            computerSetCell(2, 0);
            return;
          } else {
            if (game[2][2].clicked == false) {
              computerSetCell(2, 2);
              return;
            }
          }
        }
      }
    }
  }

  function setCell(row, col) {
    res.style.display = "none";
    tn.style.display = "inline-block";
    if (game[row][col].clicked == true) {
      return;
    } else {
      if (game[game.length-3].playerNum == 1) {
          game[row][col].value = game[game.length-2].pl1Symbol;
          document.getElementById("cl"+row.toString()+col.toString()).innerHTML = game[game.length-2].pl1Symbol;
          if (numTurn !== 8) {
            tn.innerHTML = "Computer's turn";
            game[row][col].clicked = true;
            numTurn++;
            if (checkVictory()) {
              resetBoard();
              return;
            } else {
              setTimeout(computerGame, 500) ;
              return;
            }
          } else {
            res.style.display = "inline-block";
            res.innerHTML = "It was a draw!"
            scoreText.style.display = "inline-block";
            scoreText.innerHTML = "You: " + scoreArray[0] + " | " + "Computer: " + scoreArray[1];
            resetBoard();
            return;
          }
      } else {
        if (numTurn%2 == 0) {
          game[row][col].value = game[game.length-2].pl1Symbol;
          game[row][col].clicked = true;
          document.getElementById("cl"+row.toString()+col.toString()).innerHTML = game[game.length-2].pl1Symbol;
          numTurn++;
          if (checkVictory()) {
            resetBoard();
            return;
          } else {
            if (numTurn !== 9) {
              tn.innerHTML = "Player2's turn";
              return;
            } else {
              res.style.display = "inline-block";
              res.innerHTML = "It was a draw!"
              scoreText.style.display = "inline-block";
              scoreText.innerHTML = "Player1: " + scoreArray[0] + " | " + "Player2: " + scoreArray[1];
              resetBoard();
              return;
            }
          }
        } else {
          game[row][col].value = game[game.length-1].pl2Symbol;
          game[row][col].clicked = true;
          document.getElementById("cl"+row.toString()+col.toString()).innerHTML = game[game.length-1].pl2Symbol;
          numTurn++;
          if (checkVictory()) {
            resetBoard();
            return;
          } else {
            if (numTurn !== 9) {
              tn.innerHTML = "Player1's turn";
              return;
            } else {
              res.style.display = "inline-block";
              res.innerHTML = "It was a draw!"
              scoreText.style.display = "inline-block";
              scoreText.innerHTML = "Player1: " + scoreArray[0] + " | " + "Player2: " + scoreArray[1];
              resetBoard();
              return;
            }
          }
        }
      }
    }
  }

  function setCell00() {
    setCell(0, 0);
    return;
  }
  function setCell01() {
    setCell(0, 1);
    return;
  }
  function setCell02() {
    setCell(0, 2);
    return;
  }
  function setCell10() {
    setCell(1, 0);
    return;
  }
  function setCell11() {
    setCell(1, 1);
    return;
  }
  function setCell12() {
    setCell(1, 2);
    return;
  }
  function setCell20() {
    setCell(2, 0);
    return;
  }
  function setCell21() {
    setCell(2, 1);
    return;
  }
  function setCell22() {
    setCell(2, 2);
    return;
  }

  function play1() {
    plNum = 1;
    game[game.length-3].playerNum = plNum;
    sb.style.display = "inline-block";
    sb.innerHTML = "Would you like to be X or O?";
    sbX.style.display = "inline-block";
    sbO.style.display = "inline-block";
  }
  function play2() {
    plNum = 2;
    game[game.length-3].playerNum = plNum;
    sb.style.display = "inline-block";
    sb.innerHTML = "Player1 would you like to be X or O?";
    sbX.style.display = "inline-block";
    sbO.style.display = "inline-block";
  }
  function setSymbolX() {
    pl1Smb = "X";
    pl2Smb = "O";
    game[game.length-2].pl1Symbol = pl1Smb;
    game[game.length-1].pl2Symbol = pl2Smb;
    tn.style.display = "inline-block";
    if (game[game.length-3].playerNum == 1) {
      tn.style.display = "inline-block";
      tn.innerHTML = "Your turn";
    } else {
      tn.style.display = "inline-block";
      tn.innerHTML = "Player1's turn";
    }
    pl1.style.display = "none";
    pl2.style.display = "none";
    npl.style.display = "none";
    sb.style.display = "none";
    sbX.style.display = "none";
    sbO.style.display = "none";
  }
  function setSymbolO() {
    pl1Smb = "O";
    pl2Smb = "X";
    game[game.length-2].pl1Symbol = pl1Smb;
    game[game.length-1].pl2Symbol = pl2Smb;
    tn.style.display = "inline-block";
    if (game[game.length-3].playerNum == 1) {
      tn.style.display = "inline-block";
      tn.innerHTML = "Your turn";
    } else {
      tn.style.display = "inline-block";
      tn.innerHTML = "Player1's turn";
    }
    pl1.style.display = "none";
    pl2.style.display = "none";
    npl.style.display = "none";
    sb.style.display = "none";
    sbX.style.display = "none";
    sbO.style.display = "none";
  }
});
