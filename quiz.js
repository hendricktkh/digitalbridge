const questions = [
  {question:'You need to send a document with an email. What should you use?',options:['The attachment button','The browser refresh button','The volume control'],correct:0,explanation:'An attachment lets you include a file with an email. Check that the file contains no private information before sharing.'},
  {question:'Which spreadsheet formula adds cells A1 through A5?',options:['=PLUS(A1:A5)','=SUM(A1:A5)','=ADDALL(A1:A5)'],correct:1,explanation:'SUM adds the values in a chosen range, such as A1:A5.'},
  {question:'What is the most helpful way to organise several related documents?',options:['Give them all the same name','Keep everything on the desktop','Create a folder with descriptive file names'],correct:2,explanation:'Folders and meaningful names help you store, find and manage digital files.'}
];
const initialQuizMarkup=document.getElementById('quizContent').innerHTML;
let currentQuestion = 0, score = 0, answered = false;
const questionCounter = document.getElementById('questionCounter');
const progress = document.getElementById('quizProgress');
let questionText = document.getElementById('questionText');
let answerOptions = document.getElementById('answerOptions');
let feedback = document.getElementById('quizFeedback');
let nextButton = document.getElementById('nextQuestion');
const quizContent = document.getElementById('quizContent');
function renderQuestion(){
  answered = false;
  const q = questions[currentQuestion];
  questionCounter.textContent = `${String(currentQuestion+1).padStart(2,'0')} / ${String(questions.length).padStart(2,'0')}`;
  progress.style.width = `${((currentQuestion+1)/questions.length)*100}%`;
  questionText.textContent = q.question;
  answerOptions.replaceChildren();
  feedback.replaceChildren();feedback.className='quiz-feedback';
  nextButton.hidden = true;
  q.options.forEach((option,index)=>{
    const button = document.createElement('button');
    button.type = 'button';button.className = 'answer';
    const letter = document.createElement('span');letter.className = 'answer-letter';letter.textContent = String.fromCharCode(65+index);
    const copy = document.createElement('span');copy.textContent = option;
    button.append(letter,copy);
    button.addEventListener('click',()=>selectAnswer(index));
    answerOptions.append(button);
  });
}
function selectAnswer(index){
  if(answered)return;
  answered = true;
  const q = questions[currentQuestion];
  if(index === q.correct)score++;
  [...answerOptions.children].forEach((button,i)=>{
    button.disabled = true;
    if(i===q.correct){button.classList.add('correct');const badge=document.createElement('span');badge.className='answer-badge';badge.textContent='✓ Correct answer';button.append(badge);}
    else if(i===index)button.classList.add('incorrect');
  });
  feedback.className='quiz-feedback '+(index===q.correct?'passed':'needs-retry');
  feedback.setAttribute('tabindex','-1');
  feedback.innerHTML=`<strong class="feedback-title">${index===q.correct?'<span class="feedback-check" aria-hidden="true">✓</span> Correct answer':'Not quite — see the correct answer above'}</strong><span>${q.explanation}</span><span class="feedback-instruction">${currentQuestion===questions.length-1?'You’ve finished the questions. View your results below.':'Ready for the next question? Continue below.'}</span>`;
  nextButton.hidden = false;
  nextButton.firstChild.textContent = currentQuestion===questions.length-1?'View my results ':'Continue to next question ';
  feedback.focus({preventScroll:true});nextButton.scrollIntoView({block:'nearest'});
}
function showResult(){
  questionCounter.textContent = 'COMPLETE';
  progress.style.width='100%';
  quizContent.innerHTML = `<div class="quiz-result"><span class="quiz-category">PRACTICE COMPLETE</span><h3>Your skills check results</h3><div class="result-score">${score} / ${questions.length}</div><p>Review the courses to practise any topics you found difficult. This short check is a learning activity, not an official ICT skills assessment.</p><button type="button" class="button button-dark" id="restartQuiz">Try again <span>↻</span></button></div>`;
  document.getElementById('restartQuiz').addEventListener('click',()=>{
    currentQuestion=0;score=0;
    quizContent.innerHTML=initialQuizMarkup;
    questionText=document.getElementById('questionText');answerOptions=document.getElementById('answerOptions');feedback=document.getElementById('quizFeedback');nextButton=document.getElementById('nextQuestion');
    nextButton.addEventListener('click',advanceQuestion);renderQuestion();questionText.setAttribute('tabindex','-1');questionText.focus();
  });
}
function advanceQuestion(){currentQuestion++;if(currentQuestion===questions.length)showResult();else renderQuestion();}
nextButton.addEventListener('click',advanceQuestion);
renderQuestion();

