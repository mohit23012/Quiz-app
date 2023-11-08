const quiz = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

let index = 0;
correct = 0;
incorrect = 0;
const total = quiz.length;
const quesBox = document.querySelector(".heading");
const options = document.querySelectorAll("input[type='radio']");
const button = document.querySelector("button");

const LoadQues = () => {
  const reset = () => {
    options.forEach((element) => {
      element.checked = false;
    });
  };
  reset();
  if (total === index) {
    return quizend();
  }

  const data = quiz[index];
  quesBox.textContent = `${index + 1}) ${data.question}`;
  options[0].nextElementSibling.innerText = data.a;
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
};
LoadQues();

button.addEventListener(
  "click",
  (submit = () => {
    const data = quiz[index];
    const ans = getanswer();
    console.log(ans);
    if (ans === data.correct) {
      //check answer
      correct++;
      //   console.log("yes");
    } else {
      incorrect++;
      //   console.log("no");
    }
    index++;
    LoadQues();
  })
);

const getanswer = () => {
  let ans;
  options.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

const quizend = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("box")[0].innerHTML = `
  <h2 class='text-center font-semibold '>Thank you for playing the quiz </h2></br>
  <h1 class='text-center font-semibold'>you've scored ${correct} / ${total}`;
};
LoadQues(index);
