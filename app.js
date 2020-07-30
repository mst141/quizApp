const quiz = [
  {
    question: '「朝ごはん」を発明したのは誰？',
    answers: [
      'エジソン',
      'モーツァルト',
      '徳川家康',
      '孫文',
    ],
    correct: 'エジソン'
  },{
    question: 'シュークリームの「シュー」はフランス語でなんて意味？',
    answers: [
      'キャベツ',
      'レモン',
      'キャビア',
      'レンジ',
    ],
    correct: 'キャベツ'
  },{
    question: '木星は地球何個分？',
    answers: [
      '1320個',
      '860個',
      '2030個',
      '569個',
    ],
    correct: '1320個'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//HTMLオブジェクトをもつものは「$」を付ける
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文・選択肢を定義
const setUpQuiz = () => {
  //問題文の要素を取り出して問題文を代入
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  
  //button(選択肢)の配列要素を取り出して名前をつける
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setUpQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題がまだあればこちらを実行
    setUpQuiz();
  }else{
    //問題がもうなければこちらを実行
    window.alert('終了！正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定  e:イベントのオブジェクト
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}