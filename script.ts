// Define the questions array
const questions: { question: string; options: string[]; answer: string }[] = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ['Harper Lee', 'Mark Twain', 'Jane Austen', 'Charles Dickens'],
    answer: 'Harper Lee',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
    answer: 'Mars',
  },
];

let questionNumber: number = 0;
let questionElement: HTMLElement | null = document.getElementById('Question');
let score: number = 0;
function showQuestion() {
  let optionsElement: HTMLElement | null = document.getElementById('options');
  if (questionElement && optionsElement) {
    questionElement.innerHTML = questions[questionNumber].question;
    optionsElement.innerHTML = '';
    questions[questionNumber].options.forEach(value => {
      const btn: HTMLButtonElement = document.createElement('button');

      btn.style.border = '1px solid black';
      btn.style.width = '300px';
      btn.style.margin = '1rem';

      btn.innerText = value;
      optionsElement.appendChild(btn);
      btn.addEventListener('click', (e: MouseEvent) => {
        const clickedValue: string = (e.target as HTMLButtonElement).innerText;

        if (clickedValue === questions[questionNumber].answer) {
          btn.style.backgroundColor = 'green';
          btn.style.color = 'white';
          score++;
        } else {
          btn.style.backgroundColor = 'red';
          btn.style.color = 'white';
        }
        setTimeout(() => {
          nextQuestion();
        }, 500);
      });
    });
  } else {
    console.log('Cannot find questionElement or optionsElement');
  }
}

// Function to move to the next question
function nextQuestion() {
  questionNumber++;
  if (questionNumber < questions.length) {
    showQuestion();
  } else {
    alert('Quiz completed. Your score: ' + score);
  }
}
function prevQuestion() {
  if (questionNumber > 0) {
    questionNumber--;
    showQuestion();
  } else {
    console.log('At the beginning of the quiz');
  }
}

showQuestion();
