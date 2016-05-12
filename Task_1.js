function Human(age, name) {
  this.age  = age;
  this.name = name;
}

Human.prototype.introduce = function () {
  var age  = this.age;
  var name = this.name;

  var message = 'human';

  //here your code
  //human should say his name, how old is he/she
  //eg: My name is John and i am 18 years old
  name && age ? (message = "My name is " + name + " and i am " + age + " years old") : (name ? message = ('My name is ' + name) : (age ? (message = 'I am ' + age + ' years old.') : (message = 'Who am I?' )));
  console.log(message);
};

function Citizen(age, name, citizenship) {
  Human.apply(this, arguments);
  this.citizenship = citizenship;
}

Citizen.prototype = new Human();

Citizen.prototype.introduce = function () {
  Human.prototype.introduce.apply(this, arguments);
  var citizenship = this.citizenship;
  var age         = this.age;

  //here your code
  //citizen should say his citizenship and does he has an ID
  //eg: I am citizen of a Kyrgyzstan
  switch(citizenship) {
    case 'kg': message = 'Kyrgyzstan';
    break;
    case 'KG': message = 'Kyrgyzstan';
    break;
    case 'ru': message = 'Russian Federation';
    break;
    case 'RU': message = 'Russian Federation';
    break;
    case 'kz': message = 'Kazakhstan';
    break;
    case 'kz': message = 'Kazakhstan';
    break;
  }
  message += "that is country I have citizenship in";
  console.log(message);
};

Citizen.prototype.monthCosts = function () {
  var costs = function() {
    var usdToSomCourse = 68;
    var taxiCost = 100*2*30;
    var breakfast = 100*30;
    var lunch = 200*30;
    var dinner = 150*30;
    var sigarettes = 60*30;
    var internetTv = 1300;
    var utilities = 2000;
    var rest = 2000*4;
    var coursesJs = 6800;
    var coursesEng = 2600;
    var summ = (taxiCost + breakfast + lunch + dinner + sigarettes + internetTv + utilities + rest + coursesJs + coursesEng)/usdToSomCourse;
    return summ;
  }
  var finalCosts = '$' +  Math.round(costs());
  //here your code
  //citizen should say how much does he spent every month
  //eg: (dinner + breakfast) * 31
  console.log("I spend " + finalCosts + " dollars every month");
};

function Student(age, name, citizenship, monthlyPay) {
  Citizen.apply(this, arguments);
  this.monthlyPay = monthlyPay;
}

Student.prototype = new Citizen();

Student.prototype.introduce = function () {
  Citizen.prototype.introduce.apply(this, arguments);
  var age     = this.age;
  var message = 'student';

  //here your code
  //student should say on which level he/she is
  //I am a student of a high school
  if (age && (age<17)) {
    message = "I am a student of a high school";
  }
  else if (age && (age>17)) {
    message = "I am a student of a university";
  }
  else if (!age) {
    message = "I've not born yet!";
  }
  else {
    message = "I'm not a student";
  }
  console.log(message);
};

Student.prototype.shouldPayPerMonth = function () {
  var monthlyPay = this.monthlyPay;
  var message;

  //here your code
  //and how much he need to pay for whole course
  if (monthlyPay) {
    message = `I have to pay $${monthlyPay} dollars per month`;
  }
  else {
    message = `I study for free`;
  }
  console.log(message);
};

Student.prototype.shouldBePayedBack = function () {
  var monthlyPay = this.monthlyPay;
  var receive = true;
  var courseDuration = 9;
  var receivedMoney = +monthlyPay*courseDuration/2;
  var message;

  //here your code
  //and how much he will received by end of a course
  if (monthlyPay && receive) {
    message = "I will be received back $" + receivedMoney;
  }
  else if (monthlyPay && !receive) {
    message = `I will not be received any money`;
  }
  else {
    message = "You don't pay. So no money back";
  }
  console.log(message);
};

var student = new Student('18', 'John', 'kg', '100');

student.introduce();
student.monthCosts();
student.shouldPayPerMonth();
student.shouldBePayedBack();
for (var i = 1; i; i++) {
  console.log(i);
}
