const fs = require("fs");
const calibrationValues = fs.readFileSync("inputs.txt").toString().split("\n");
let totalCalibration = 0;

// TODO - Could a package reduce this overhead? Something such as words-to-numbers to avoid the value pairs or maybe something that can do the search instead of the loop?
const possibleDigits = [
  { text: "one", value: 1 },
  { text: "two", value: 2 },
  { text: "three", value: 3 },
  { text: "four", value: 4 },
  { text: "five", value: 5 },
  { text: "six", value: 6 },
  { text: "seven", value: 7 },
  { text: "eight", value: 8 },
  { text: "nine", value: 9 },
  { text: "1", value: 1 },
  { text: "2", value: 2 },
  { text: "3", value: 3 },
  { text: "4", value: 4 },
  { text: "5", value: 5 },
  { text: "6", value: 6 },
  { text: "7", value: 7 },
  { text: "8", value: 8 },
  { text: "9", value: 9 },
];
calibrationValues.forEach((value) => {
  // Grab and combine the first and last digits
  let firstDigitData = { position: value.length };
  let lastDigitData = { position: -1 };
  possibleDigits.forEach((digitPair) => {
    const firstIndex = value.indexOf(digitPair.text);
    const lastIndex = value.lastIndexOf(digitPair.text);
    if (firstIndex !== -1 && firstIndex < firstDigitData.position)
      firstDigitData = { position: firstIndex, value: digitPair.value };
    if (lastIndex !== -1 && lastIndex > lastDigitData.position)
      lastDigitData = { position: lastIndex, value: digitPair.value };
  });
  const twoDigitNumber = Number(
    `${firstDigitData.value}${lastDigitData.value}`
  );

  // Ensures spaces and other bad data doesn't cause failure
  if (!isNaN(twoDigitNumber)) totalCalibration += twoDigitNumber;
});

console.log("Total: ", totalCalibration);
