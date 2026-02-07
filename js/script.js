const quizQuestions = [
  {
    id: 1,
    question: "Who is known as the God of Cricket?",
    options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Ricky Ponting"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    id: 2,
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11"
  },
  {
    id: 3,
    question: "Which country won the first Cricket World Cup?",
    options: ["Australia", "England", "West Indies", "India"],
    correctAnswer: "West Indies"
  },
  {
    id: 4,
    question: "Who has scored the most centuries in international cricket?",
    options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Jacques Kallis"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    id: 5,
    question: "What is the length of a cricket pitch?",
    options: ["20 yards", "22 yards", "24 yards", "18 yards"],
    correctAnswer: "22 yards"
  },
  {
    id: 6,
    question: "Which format of cricket has 20 overs per side?",
    options: ["Test", "ODI", "T20", "The Hundred"],
    correctAnswer: "T20"
  },
  {
    id: 7,
    question: "Who was the first captain to win all three ICC trophies?",
    options: ["Ricky Ponting", "MS Dhoni", "Imran Khan", "Clive Lloyd"],
    correctAnswer: "MS Dhoni"
  },
  {
    id: 8,
    question: "Which country is known as the Proteas?",
    options: ["Australia", "South Africa", "New Zealand", "England"],
    correctAnswer: "South Africa"
  },
  {
    id: 9,
    question: "What does LBW stand for?",
    options: ["Leg By Wicket", "Long Ball Wide", "Leg Before Wicket", "Left Bat Win"],
    correctAnswer: "Leg Before Wicket"
  },
  {
    id: 10,
    question: "Who is the highest run-scorer in ODI cricket?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Rohit Sharma", "Kumar Sangakkara"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    id: 11,
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
    correctAnswer: "Muttiah Muralitharan"
  },
  {
    id: 12,
    question: "Which Indian cricketer is known as 'Captain Cool'?",
    options: ["Virat Kohli", "Sourav Ganguly", "MS Dhoni", "Rahul Dravid"],
    correctAnswer: "MS Dhoni"
  },
  {
    id: 13,
    question: "What is the maximum number of overs in an ODI match?",
    options: ["40", "45", "50", "60"],
    correctAnswer: "50"
  },
  {
    id: 14,
    question: "Who hit the first double century in ODI cricket?",
    options: ["Virender Sehwag", "Chris Gayle", "Sachin Tendulkar", "Rohit Sharma"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    id: 15,
    question: "Which stadium is known as the Home of Cricket?",
    options: ["MCG", "Lords", "Eden Gardens", "The Oval"],
    correctAnswer: "Lords"
  },
  {
    id: 16,
    question: "Which country has won the most ODI World Cups?",
    options: ["India", "West Indies", "Australia", "England"],
    correctAnswer: "Australia"
  },
  {
    id: 17,
    question: "Who is the fastest batsman to score 10,000 ODI runs?",
    options: ["Sachin Tendulkar", "Virat Kohli", "AB de Villiers", "Chris Gayle"],
    correctAnswer: "Virat Kohli"
  },
  {
    id: 18,
    question: "Which format of cricket is played for five days?",
    options: ["T20", "ODI", "Test", "League"],
    correctAnswer: "Test"
  },
  {
    id: 19,
    question: "Who was the first batsman to score 100 international centuries?",
    options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    id: 20,
    question: "Which bowler is famous for the 'Doosra'?",
    options: ["Anil Kumble", "Shane Warne", "Muttiah Muralitharan", "Harbhajan Singh"],
    correctAnswer: "Muttiah Muralitharan"
  },
  {
    id: 21,
    question: "Which is the largest cricket stadium in the world?",
    options: ["MCG", "Eden Gardens", "Narendra Modi Stadium", "Wankhede Stadium"],
    correctAnswer: "Narendra Modi Stadium"
  },
  {
    id: 22,
    question: "Who won the ICC T20 World Cup 2007?",
    options: ["Pakistan", "Australia", "India", "South Africa"],
    correctAnswer: "India"
  },
  {
    id: 23,
    question: "Which player is known as 'Mr. 360'?",
    options: ["AB de Villiers", "Glenn Maxwell", "Jos Buttler", "Chris Gayle"],
    correctAnswer: "AB de Villiers"
  },
  {
    id: 24,
    question: "Which country hosts the IPL?",
    options: ["Australia", "England", "India", "UAE"],
    correctAnswer: "India"
  },
  {
    id: 25,
    question: "Who has the highest individual score in ODI cricket?",
    options: ["Rohit Sharma", "Martin Guptill", "Chris Gayle", "Virender Sehwag"],
    correctAnswer: "Rohit Sharma"
  },
  {
    id: 26,
    question: "Which bowler has taken hat-tricks in all three formats?",
    options: ["Wasim Akram", "Brett Lee", "Lasith Malinga", "Jasprit Bumrah"],
    correctAnswer: "Lasith Malinga"
  },
  {
    id: 27,
    question: "Who was the first Indian to score a triple century in Tests?",
    options: ["Sachin Tendulkar", "Virender Sehwag", "Rahul Dravid", "Sunil Gavaskar"],
    correctAnswer: "Virender Sehwag"
  },
  {
    id: 28,
    question: "Which country won the ICC Cricket World Cup 2019?",
    options: ["India", "New Zealand", "England", "Australia"],
    correctAnswer: "England"
  },
  {
    id: 29,
    question: "Which batsman is known as the 'Universe Boss'?",
    options: ["Andre Russell", "Chris Gayle", "Kieron Pollard", "Dwayne Bravo"],
    correctAnswer: "Chris Gayle"
  },
  {
    id: 30,
    question: "Which Indian bowler is known as the 'Yorker King'?",
    options: ["Bhuvneshwar Kumar", "Jasprit Bumrah", "Zaheer Khan", "Mohammed Shami"],
    correctAnswer: "Jasprit Bumrah"
  }
];

const displayQue = document.querySelector('.display-que .card-header h4');
const displayOption = document.querySelector('.display-que .card-body ul');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const questionList = document.querySelector('.question-list ul');
const circleList = document.getElementById('question-list');

let currentQue = 0;

const handleNext = () => {
  displayQue.textContent = `${currentQue + 1}). ${quizQuestions[currentQue].question}`;
  displayOption.innerHTML = '';

  quizQuestions[currentQue].options.forEach((Option) => {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let label = document.createElement('label');

    input.type = "radio";
    input.name = "option";
    input.value = Option;

    if (quizQuestions[currentQue].yourans === Option) {
      input.checked = true;
    }

    input.addEventListener('change', (e) => {
      quizQuestions[currentQue].yourans = e.target.value;
    });

    label.textContent = Option;

    li.appendChild(input);
    li.appendChild(label);
    displayOption.appendChild(li);
  });
};

handleNext();


next.addEventListener('click', () => {
  if (currentQue < quizQuestions.length - 1) {
    currentQue++;
    handleNext();
  }
});

prev.addEventListener('click', () => {
  if (currentQue > 0) {
    currentQue--;
    handleNext();
  }
});


const handleLeftBar = () => {
  quizQuestions.forEach((_, index) => {
    const li = document.createElement('li');
    li.classList.add('py-2', 'text-center');

    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary', 'w-100', 'text-center');

    btn.textContent = `Question ${index + 1}`;

    btn.addEventListener('click', () => {
      currentQue = index;
      handleNext();
    });

    li.appendChild(btn);
    questionList.appendChild(li);
  });
};

handleLeftBar();


const handleRightCircle = () => {
  quizQuestions.forEach((_, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.textContent = index + 1;
    btn.addEventListener('click', () => {
      currentQue = index;
      handleNext();
    });

    li.appendChild(btn);
    circleList.appendChild(li);
  });
};

handleRightCircle();

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
  let correct = 0;
  let wrong = 0;
  let unsubmit=0;

  quizQuestions.forEach(q => {
    if (q.yourans === q.correctAnswer) {
      correct++;
    } 
    else if(q.yourans === 0){
      unsubmit++;
    }
    else {
      wrong++;
    }
  });

  const total = quizQuestions.length;

  const resultBox = document.getElementById("result-container");
  resultBox.style.display = "block";

  document.getElementById("correct").innerText = `Correct : ${correct}`;
  document.getElementById("wrong").innerText = `Wrong : ${wrong}`;
  document.getElementById("score").innerText = `Score : ${correct}/${total}`;

  window.scrollTo({ top: 0, behavior: "smooth" });
});


