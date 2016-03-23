var atticus = ['Atticus', '2405', '47000', 3];
var jem = ['Jem', '62347', '63500', 4];
var boo = ['Boo', '11435', '54000', 3];
var scout = ['Scout', '6243', '74750', 5];

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
  console.log(employeeToSummary(employees[i]));
}

/*
- The first item should also contain the employees name.
- The second item should contain the percentage of STI the employee is to receive.
- The third item should be the adjusted annual compensation (base annual + STI)
- The fourth item should be the employees total bonus rounded to the nearest dollar.
*/
function employeeToSummary(employee) {
  var name = employee[0];
  var salary = parseInt(employee[2]);
  var percentage = calcSTIPercentage(employee);
  var bonus = Math.round(salary * percentage);
  var total = salary + bonus;
  return [name, percentage, total, bonus];
}

/*To calculate an individuals STI:
- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
- If they have 4 employee numbers, this means they have been with the company for longer than 15 years,
and should receive an additional 5%.
- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
- No bonus can be above 13% total.
*/
function calcSTIPercentage(employee) {
  var employeeNumber = employee[1];
  var salary = parseInt(employee[2]);
  var rating = employee[3];

  var percentage = 0;

  if (rating > 2) {
    switch (rating) {
    case 3:
      percentage = .04;
      break;
    case 4:
      percentage = .06;
      break;
    case 5:
      percentage = .10;
      break;
    default:
      percentage = 0;
    }

    if (employeeNumber.length <= 4) {
      percentage += .05;
    }

    if (salary > 65000) {
      percentage -= .01;
    }

    if (percentage > .13) {
      percentage = .13;
    }
  }

  return percentage;
}
