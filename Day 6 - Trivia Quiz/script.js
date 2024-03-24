document.addEventListener('DOMContentLoaded', function() {
  const quizContainer = document.getElementById('quiz-container');
  const submitButton = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result');
  const resultContent = document.getElementById('result-container');

  let score = 0;
  let currentQuestionIndex = 0;

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Earth", "Mars"],
      answer: "Jupiter"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      answer: "H2O"
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Mars", "Venus", "Mercury", "Neptune"],
      answer: "Mars"
    }
  ];

  // Shuffle questions
  questions.sort(() => Math.random() - 0.5);

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    resultContent.style.display = 'none';
    quizContainer.innerHTML = `
      <div class="question">${currentQuestion.question}</div>
      <div class="options">
        ${currentQuestion.options.map(option => `
          <input type="radio" id="${option}" name="answer" value="${option}">
          <label for="${option}">${option}</label>
        `).join('')}
      </div>
    `;
  }

  function showResult() {
    resultContainer.textContent = `Your score: ${score}/${questions.length}`;
    let answers = '';
    questions.forEach((question, index) => {
      answers += `<p>${index + 1}. ${question.question} - ${question.answer}</p>`;
    });
    resultContent.innerHTML = `<div>Correct Answers:</div>${answers}`;
    resultContent.classList.add('fade-in');
    resultContent.style.display = 'block';
    

  }

  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;
    const userAnswer = selectedOption.value;
    if (userAnswer === questions[currentQuestionIndex].answer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      quizContainer.style.display = 'none';
      submitButton.style.display = 'none';
      resultContainer.style.display = 'block';
      showResult();
    }
  }

  displayQuestion();

  submitButton.addEventListener('click', checkAnswer);
});
