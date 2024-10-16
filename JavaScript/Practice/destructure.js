let array = [
  "harishbabu.com",
  "linkedin.com/in/harishbabu-s",
  "Harishbabu",
  "S",
  9901405981,
  26,
  "instagram.com/harishbabus",
  "Engineer",
  "Developer",
  "12Lpa",
];

const [portfolio, careerProfile, ...BasicInfo] = array;

const Profession = BasicInfo.splice(-3);
const socialProfile = BasicInfo.pop();
console.log(portfolio);
console.log(careerProfile);
console.log(BasicInfo);
console.log(socialProfile);
console.log(Profession);
