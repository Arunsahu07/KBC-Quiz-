window.onload = () => {
  let queNo = 1;
  let skip = document.querySelector(".skip");
  let displayQueNo = document.querySelector(".queNo");
  let curScore = 0;
  let msg = document.querySelector(".msg");
  let screen = document.querySelector(".screen");
  let opt1 = document.querySelector(".op1");
  let opt2 = document.querySelector(".op2");
  let opt3 = document.querySelector(".op3");
  let correctSound = new Audio("./Assests/correct.wav");
  let wrongSound = new Audio("./Assests/wrong.mp3");

  let opt4 = document.querySelector(".op4");
  let score = document.querySelector(".score");

  function fill() {
    screen.innerHTML = `${QUESTIONS[queNo]["name"]}`;
    opt1.innerHTML = `${QUESTIONS[queNo]["option1"]}`;
    opt2.innerHTML = `${QUESTIONS[queNo]["option2"]}`;
    opt3.innerHTML = `${QUESTIONS[queNo]["option3"]}`;
    opt4.innerHTML = `${QUESTIONS[queNo]["option4"]}`;
  }
  fill();
  skip.addEventListener("click", () => {
    queNo++;
    displayQueNo.innerHTML = `Quetion No : ${queNo}`;
    if (queNo === 15) {
      msg.innerHTML = `You score is ${curScore}`;
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else
      setTimeout(() => {
        fill();
      }, 1000);
  });
  let btns = document.querySelectorAll("button");
  for (let i = 0; i < 4; i++) {
    btns[i].addEventListener("click", (e) => {
      e.target.style.transform = "scale(0.9)";
      setTimeout(() => {
        e.target.style.transform = "scale(1)";
      }, 1800);
      if (e.target.value == QUESTIONS[queNo]["answer"]) {
        curScore += QUESTIONS[queNo]["money"];
        correctSound.play();
        score.innerHTML = `Score : ${curScore}`;
        msg.innerHTML = "Correct! Answer";
        e.target.style.background = "rgb(0, 80, 0)";
      } else {
        wrongSound.play();
        msg.innerHTML = "Oops! Better luck next time";
        e.target.style.background = "red";
      }
      if (queNo === 15) {
        msg.innerHTML = `You score is ${curScore}`;
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
      setTimeout(() => {
        e.target.style.background = "#316B83";
      }, 2000);
      displayQueNo.innerHTML = `Quetion No : ${queNo + 1}`;
      setTimeout(() => {
        if (queNo < 15) fill();
        else location.reload();
      }, 2000);
      setTimeout(() => {
        msg.innerHTML = "";
      }, 2000);
      queNo++;
    });
  }
};
