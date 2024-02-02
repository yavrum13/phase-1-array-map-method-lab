const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(titleCase);
}


function titleCase(tutorial) {
  const titleCasedWords = tutorial.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  })

  let result = '';
  for (let i = 0; i < titleCasedWords.length; i++){
    result += titleCasedWords[i];
    if (i < titleCasedWords.length -1){
      result += ' ';
    }
  }

  return result;
}

const titleCasedArray = titleCased();