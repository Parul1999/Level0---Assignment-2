const { Scale } = require('enquirer');
const readLineSync = require('readline-sync')
const CFonts = require('cfonts');
const chalk = require('chalk');

let scoreRequired = 0;
var currentLevelScore=0;
var score = 0;
var levelOne = true;
var levelTwo = false;
var levelThree = false;
var highestScoreAchieved= false;
var highScore=[
  {
    name:"Parul",
    score:1
  }
]


//Level One Questions
var questionsListLevelOne =   [{
  message: 'What is the largest mammal in the world?',
  choices: ['Whale', 'Bear', 'Cat'],
  correctChoice: 0 //index
},
{
  message: 'How many colors are in a rainbow?',
  choices: ['6', '4','7'],
  correctChoice: 2
},
{
  message: 'What is the opposite of ‘cheap’?',
  choices: ['low-priced', 'Expensive', 'Low'],
  correctChoice: 1
},
{
  message: 'Which animal is the tallest in the world??',
  choices: ['Elephant', 'Giraffe', 'Bear'],
  correctChoice: 1
},
{
  message: 'How many continents are there in the world??',
  choices: ['7', '9', '8'],
  correctChoice: 0
}

];

//Level Two Questions
var questionsListLevelTwo =   [{
  message: 'Can you name the closest star to Earth?',
  choices: [' Moon', 'Sun', 'Venus', 'Saturn'],
  correctChoice: 1 //index
},
{
  message: 'What is the largest continent?',
  choices: ['Asia', 'America', 'Africa', 'Europe'],
  correctChoice: 0
},
{
  message: 'Which planet in our Solar System is known for having a ring?',
  choices: ['Venus', 'Earth', 'Mars', 'Saturn'],
  correctChoice: 3 //index
},
{
  message: 'How many states are there in the world?',
  choices: ['27', '75', '85', '95'],
  correctChoice: 0
},
{
  message: 'Who was the first man to step on the moon?',
  choices: ['Ron Evans', 'Neil Armstrong', 'Al Worden', 'Stu Roosa'],
  correctChoice: 1 //index
},
{
  message: 'Who invented the telephone?',
  choices: ['Antonio Meucci', 'Thomas Edison', 'Alexander Graham Bell', 'Elisha Gray'],
  correctChoice: 2
},{
  message: 'Which country is home to the kangaroo?',
  choices: ['Europe', 'America', 'Paris', 'Australia'],
  correctChoice: 3 //index
},
{
  message: 'What color are Smurfs?',
  choices: ['Blue', 'Red', 'Green', 'Yellow'],
  correctChoice: 0
},
{
  message: 'How many sides does a triangle have?',
  choices: ['5', '4', '3', '0'],
  correctChoice: 2 //index
},
{
  message: 'In which month is independence day?',
  choices: ['March', 'January', 'September', 'August'],
  correctChoice: 3
}

];
//Level Three Questions
var questionsListLevelThree =   [{
  message: 'How many countries are there in the world?',
  choices: ['Minimum viable product', 'Most Valuable Post', 'Minimum Valuable Player', 'Most Valuable Player', 'Minimum Valuable Post'],
  correctChoice: 3 //index
},
{
  message: 'If you suffer from arachnophobia, which animal are you scared of?',
  choices: ['Spiders', 'Lizards', 'Birds', 'Water', 'Height'],
  correctChoice: 0
},{
  message: 'A scientist who studies rocks is called a what?',
  choices: ['A scientist', 'A paleographer', 'A Ethologists', 'A Anthropologists', 'A geologist'],
  correctChoice: 4 //index
},
{
  message: 'How many bones do sharks have?',
  choices: ['2', '0', '805', '195', '256'],
  correctChoice: 1
},{
  message: 'In what country were the Olympic Games invented?',
  choices: ['Antartica', 'Paris', 'Greece', 'America', 'Australia'],
  correctChoice:2 //index
},
{
  message: 'Which animal is known as the ‘Ship of the Desert?',
  choices: ['Camel', 'Yak', 'Snake', 'Bear', 'Bull'],
  correctChoice: 0
},{
  message: ' Where does a pig live?',
  choices: ['Kennel', 'Den', 'Stable', 'Hive', 'Sty'],
  correctChoice: 4 //index
},
{
  message: 'How many primary colors are there?',
  choices: ['2', '3', '5', '4', '1'],
  correctChoice: 1
},{
  message: 'Which is the longest river on the earth?',
  choices: ['Nile', 'Amazon', 'Congo', 'Yellow', 'Indus'],
  correctChoice: 0 //index
},
{
  message: 'What is the name of Mickey Mouse’s pet dog?',
  choices: ['Ducky', 'Venus', 'Minnie', 'Pluto', 'Rocky'],
  correctChoice: 3
},{
  message: 'What is the standard taste of the water?',
  choices: ['Sugary', 'Salty', 'Tasteless', 'Sour', 'Bitter'],
  correctChoice: 2 //index
},
{
  message: 'Which country is called the land of rising sun?',
  choices: ['China',  'Paris', 'Australia', 'India','Japan'],
  correctChoice: 4
},{
  message: 'Which planet is known as the Red Planet?',
  choices: ['Jupiter', 'Saturn', 'Venus', 'Mars', 'Earth'],
  correctChoice: 3 //index
},
{
  message: 'How many pairs of wings do bees have?',
  choices: ['2', '1', '3', '0', '5'],
  correctChoice: 0
},{
  message: 'Which of the following birds is known for its intelligence?',
  choices: ['Kingfisher', 'Sparrow', 'Crow', 'Pigeon', 'Owl'],
  correctChoice: 4 //index
}];


CFonts.say('WELCOME TO THE|KIDZ QUIZ!', {
  font:"console",
  gradient: ['cyan', 'red'],
  align:"center",
  letterSpacing:2
});

var userName = readLineSync.question(
CFonts.say("Hey There , What's your good name ?", {
  font:"console",
  colors: ['cyanBright'],
}))

CFonts.say(
  "Total Levels : 3|Press 0 (cancel) to skip the question|Correct Answer : + 1|Wrong Answer: - 2|Question Skipped: - 1"
  ,{
    font:"console",
    colors:['yellow']
  })



console.log( 
chalk.bold.yellow.underline(userName.toUpperCase()) + " "+
chalk.bold.yellow("Let's Begin with the 1st question of Level 1 !!"));

function answerCheck(choices,ques,correctAns)
{
  let userAns = readLineSync.keyInSelect
  (choices,
  chalk.bold.red(ques));
  //console.log("user " +userAns +" corect"+ correctAns)
  if(userAns == correctAns)
  {
    console.log(chalk.green.bgGray("Correct Ans !"))
    score = score+1;
    currentLevelScore = currentLevelScore +1;
  }
  else if( userAns == -1)
  {
    // in case when user pressed o
     console.log(chalk.magentaBright.bgGray("Question Skipped !"))
    score = score-1;
     currentLevelScore = currentLevelScore - 1;
  }
   else 
  {
     console.log(chalk.redBright.bgGray("Wrong Ans !"))
    score = score-2;
     currentLevelScore = currentLevelScore -2;
  }

}

function questionLoop(questionsList)
{
for(let i = 0;i<questionsList.length;i++)
{
  let question = questionsList [i];
  answerCheck(
  question.choices,
  question.message,
  question.correctChoice
  );
  
}
}

function nextLevelElegibility(scoreRequired,nextLevel)
{
//equated to length as on correct ans + 1
console.log("Current Level Score " + currentLevelScore)
if(currentLevelScore >= scoreRequired)
{
 if(nextLevel == -1)
{
 CFonts.say(userName.toUpperCase() + ' GAME OVER ! |CONGRATULATIONS !!', {
  font:"console",
  gradient: ['yellow', 'blue'],
  align:"center",
});
userFeedback();
}
else
{
 CFonts.say(userName.toUpperCase() + ' CONGRATULATIONS !! YOU MADE IT TO THE NEXT LEVEL!', {
  font:"console",
  gradient: ['green', 'cyan'],
  align:"center",
});
console.log( 
chalk.bold.yellow.underline(userName.toUpperCase()) + " "+
chalk.bold.yellow("Let's Begin with the 1st question of Level "+nextLevel+" !!"));
if(nextLevel == 2)
{
levelTwo = true;
}
if(nextLevel == 3)
{
levelThree = true;
}
}
}
else
{
  if(nextLevel ==-1)
{
  CFonts.say(userName.toUpperCase() + " GAME OVER |GOOD TRY , YOU MADE IT TO THE LAST LEVEL.", {
  font:"console",
  gradient: ['red', 'cyan'],
  align:"center",
});
}
else
{
  CFonts.say(userName.toUpperCase() + " GAME OVER |HARD LUCK! YOU COULD'NT MAKE IT TO THE NEXT LEVEL.", {
  font:"console",
  gradient: ['red', 'cyan'],
  align:"center",
});
}
userFeedback();
}
}

function highScoreCheck(score)
{
  if(score>highScore[0].score)
  {
    CFonts.say(userName.toUpperCase() + "|THE NEW HIGHEST SCORER|SEND A SCREENSHOT!",{
     font:"console",
     colors:["magentaBright"],
     background:"white",
     align:"center",
     letterSpacing: 0,
     lineHeight: 0   
    })
    highestScoreAchieved= true;
  }
  else if(score == highScore[0].score)
  {

    CFonts.say(userName.toUpperCase() + "|TIE WITH THE HIGHEST SCORER|SEND A SCREENSHOT!",{
     font:"console",
     colors:["cyan"],
     background:"white",
     align:"center",
     letterSpacing: 0,
     lineHeight: 0  
    })
    highestScoreAchieved= true;
    
  }
}

if(levelOne == true)
{
  scoreRequired =Math.floor((questionsListLevelOne.length)/2.0);
  console.log(chalk.bgBlueBright('To make it to the next level , you need to score ATLEAST '+ chalk.italic(scoreRequired)))
  questionLoop(questionsListLevelOne);
  if( highestScoreAchieved== false)
  {
  highScoreCheck(score);
  }
   
  nextLevelElegibility(scoreRequired ,2);
 
}

if (levelTwo == true)
{
  currentLevelScore =0;
   scoreRequired = Math.floor(questionsListLevelTwo.length/2.0);
  console.log(chalk.bgBlueBright('To make it to the next level , you need to score ATLEAST '+ chalk.italic(scoreRequired)))
questionLoop(questionsListLevelTwo);
 if( highestScoreAchieved== false)
  {
highScoreCheck(score);
  }
nextLevelElegibility(scoreRequired ,3);

}


if (levelThree == true)
{
  currentLevelScore =0;
  scoreRequired = Math.floor(questionsListLevelThree.length/2.0);
  console.log(chalk.bgBlueBright('Try SCoring ATLEAST'+ chalk.italic(scoreRequired)))
questionLoop(questionsListLevelThree);
 if( highestScoreAchieved== false)
  {
highScoreCheck(score);
  }

//sending -1 , as there is no next level
nextLevelElegibility(scoreRequired ,-1)

}

console.log(chalk.bgRedBright.white(userName.toUpperCase() + " FINAL SCORE : " + score));

function userFeedback()
{
const prompt = new Scale({
  name: 'experience',
  message: 'Please rate your experience',
  scale: [
    { name: '1', message: 'Strongly Disagree' },
    { name: '2', message: 'Disagree' },
    { name: '3', message: 'Neutral' },
    { name: '4', message: 'Agree' },
    { name: '5', message: 'Strongly Agree' }
  ],
  choices: [
    {
      name: 'interface',
      message: 'The user experience is good.',
      initial: 2
    }
  ]
});
 
prompt.run()
  .then(value => {
    if(value.interface > 2)
    {
      console.log(chalk.green.bold("Glad , you loved it !!"))
    }
    else
    {
     console.log(chalk.red.bold("Thank you for the feedback !! Will try to improve ."))
    }
})
  .catch(console.error);
}