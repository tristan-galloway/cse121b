let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const filteredNames = names.filter(name => name.charAt(0) == 'B')

const mapNames = names.map((name) => name.length)

const reduceNames = names.reduce((total, name) => total + name.length, 0) / names.length;

let nums = ['one', 'two', 'three'];

// example 1
const numsHtml = nums.map(function (num) {
    return `<li>${num}</li>`;
});
document.getElementById("myList").innerHTML = numsHtml.join();

// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);

const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);

const array = [12, 34, 21, 54]
const luckNumber = 21
let luckIndex = array.indexOf(luckNumber)