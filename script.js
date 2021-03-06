var h1 = document.getElementById("h1");
var textarea = document.getElementById("textarea");
var submit = document.getElementById("submit");
var answer = document.getElementById("answer");
var leftArrow = document.getElementById("left");
var rightArrow = document.getElementById("right");
var bar = document.getElementsByClassName("bar")[0];
var points = document.getElementById("points");
var correct = document.getElementById("correct");
var rmStorage = document.getElementById("rmStorage");

var currentPoints = 0;

/// setting counter ///

var counter = 0;

function increaseCounter() {
  if (counter == questions.length - 1) {
    return;
  } else {
    counter++;
  }
  makeQuestion();
}

function decreaseCounter() {
  if (counter == 0) {
    return;
  } else {
    counter--;
  }
  makeQuestion();
}

leftArrow.addEventListener("click", function() {
  decreaseCounter();
  removeAnswer();
  removeYourAnswer();
  barWidth();
});

rightArrow.addEventListener("click", function() {
  increaseCounter();
  removeAnswer();
  removeYourAnswer();
  barWidth();
  points.innerHTML = currentPoints + "/" + counter;
});

/// making question appear ///

function makeQuestion() {
  h1.innerHTML = "#" + questions[counter][2] + " " + questions[counter][0];
}

window.onload = function() {
  haveYouAlreadyAnswerdCorrectly();
  makeQuestion();
  barWidth();
  points.innerHTML = currentPoints + "/" + counter;
};

// making answer appear and disappear

function showAnswer() {
  answer.innerHTML = questions[counter][1];
}

function removeAnswer() {
  answer.innerHTML = "";
}

submit.addEventListener("click", showAnswer);

/// removing your answer

function removeYourAnswer() {
  textarea.value = "";
}

/// setting bar width

function barWidth() {
  bar.style.width = ((counter + 1) / questions.length) * 100 + "%";
  bar.innerHTML = Math.floor(((counter + 1) / questions.length) * 100) + "%";
}

/// setting correct answers in locale storage

var correctAnswers = JSON.parse(localStorage.getItem("Correct")) || [];
function correctStorage() {
  if (counter == questions.length - 1) {
    return;
  } else if (correctAnswers.indexOf(questions[counter][2]) == -1) {
    correctAnswers.push(questions[counter][2]);
    localStorage.setItem("Correct", JSON.stringify(correctAnswers));
  } else {
    return;
  }
}

/// showing only the question you dont know

function haveYouAlreadyAnswerdCorrectly() {
  questions = questions.filter(function(el, ind) {
    if (
      localStorage.getItem("Correct") &&
      JSON.parse(localStorage.getItem("Correct")).indexOf(el[2]) !== -1
    ) {
      return false;
    } else {
      return true;
    }
  });
}

/// adding event listeners for keypress

document.addEventListener("keydown", function(event) {
  console.log(event);
  /// left arrow
  if (event.which === 37) {
    decreaseCounter();
    removeAnswer();
    removeYourAnswer();
    barWidth();
  }
  /// right arrow
  else if (event.which === 39) {
    increaseCounter();
    removeAnswer();
    removeYourAnswer();
    barWidth();
    points.innerHTML = currentPoints + "/" + counter;
  }
  /// enter
  if (event.which === 13) {
    showAnswer();
    // isTheAnswerCorrect();
  }
});

// manualy setting correct answer
correct.addEventListener("click", function() {
  correctStorage();
  changePoints();
  increaseCounter();
  removeAnswer();
  removeYourAnswer();
  barWidth();
  points.innerHTML = currentPoints + "/" + counter;
  this.blur();
});

/// checking if answer is correct

function isTheAnswerCorrect() {
  var yourAnswer = textarea.value
    .toLowerCase()
    .toString()
    .split(" ");
  var realAnswer = questions[counter][1]
    .toLowerCase()
    .toString()
    .split(" ");
  var comperedAnswers = realAnswer.filter(function(el, ind) {
    if (yourAnswer.indexOf(el) !== -1) {
      return true;
    }
  });
  var answerRatio = comperedAnswers.length / realAnswer.length;
  if (answerRatio > 0.4 && answerRatio <= 1) {
    correctStorage();
    showAnswer();
    changePoints();
  } else {
    showAnswer();
  }
}

// change points

function changePoints() {
  currentPoints++;
  var num = counter + 1;
  points.innerHTML = currentPoints + "/" + num;
}

rmStorage.addEventListener("click", function() {
  localStorage.clear();
});
