import { fifaData } from './fifa.js';
console.log(fifaData);

// console.log('its working');
let styles = 'background: green; color: white';
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log(
  '%c ************************* TASK 1 *************************',
  styles
);

const [final2014] = fifaData.filter(
  (item) => item.Stage === 'Final' && item.Year === 2014
);
console.log(final2014['Home Team Name']);
console.log(final2014['Away Team Name']);
console.log(final2014['Home Team Goals']);
console.log(final2014['Away Team Goals']);
console.log(final2014['Win conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log(
  '%c ************************* TASK 2 *************************',
  styles
);

function getFinals(array) {
  const finalsData = array.filter((item) => item.Stage === 'Final');
  return finalsData;
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

console.log(
  '%c ************************* TASK 3 *************************',
  styles
);

function getYears(array, cb) {
  const years = cb(array).map((item) => {
    return item.Year;
  });
  return years;
}

console.log(getYears(fifaData, getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */
console.log(
  '%c ************************* TASK 5 *************************',
  styles
);

function getWinners(array, cb) {
  const winners = cb(array).map((item) => {
    if (item['Home Team Goals'] > item['Away Team Goals']) {
      return item['Home Team Name'];
    } else {
      return item['Away Team Name'];
    }
  });
  return winners;
}

console.log(getWinners(fifaData, getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
console.log(
  '%c ************************* TASK 6 *************************',
  styles
);

function getWinnersByYear(array, cbWinners, cbYears) {
  const years = cbYears(array, getFinals);
  const winners = cbWinners(array, getFinals);
  const listOfWinners = [];
  years.forEach((item, i) => {
    console.log(`In ${item}, ${winners[i]} won the world cup!`);
    listOfWinners.push(`In ${item}, ${winners[i]} won the world cup!`);
  });
  return listOfWinners;
}

console.log(getWinnersByYear(fifaData, getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
console.log(
  '%c ************************* TASK 7 *************************',
  styles
);

function getAverageGoals(data) {
  let averageScores = {};
  let averageHome = data.reduce((accum, item) => {
    return accum + item['Home Team Goals'];
  }, 0);
  averageScores.home = (averageHome / data.length).toFixed(2);

  let averageAway = data.reduce((accum, item) => {
    return accum + item['Away Team Goals'];
  }, 0);
  averageScores.away = (averageAway / data.length).toFixed(2);
  return averageScores;
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
