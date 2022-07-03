// CONST Variales that Contain DOM Element
const questionText = document.getElementById ("questionText");
const answerText = document.getElementById ("answerText");
const homeButton = document.getElementById ("homeButton");

const questionsLength = questions.length;

let questionIndex = 0;
let isTranslatable = true;
let currentTask;

class Task {
	questions;

	constructor (questions) {
		this.questions = questions;
	}

	getQuestionByIndex (index) {
		return questions[index];
	}
}

!function() {
	document.getElementById ("questionCard").addEventListener ("click", () => {
		if (isTranslatable)
			nextCard();
		else
			showAnswer();
	});

	for (let i = 0; i < taskList.length; i++)
		createCard (taskList[i].name, taskList[i].title, taskList[i].description);
}();

function nextCard() {
	hideAnswer();
	questionIndex = randomInt(0, currentTask.questions.length - 1);

	questionText.innerText = currentTask.getQuestionByIndex(questionIndex).q;

	anime ({
		targets: questionText,
		translateX: [-50, 0],
		duration: 1000,
		easing: "easeOutExpo",
	});

	isTranslatable = false;
}

function showAnswer() {
	answerText.innerText = questions[questionIndex].a;
	answerText.style.visibility = "visible";

	anime ({
		targets: answerText,
		translateY: [-50, 0],
		opacity: [0, 1],
		duration: 500,
		easing: "easeOutExpo"
	});

	isTranslatable = true;
}

function hideAnswer() {
	answerText.style.visibility = "hidden";
}

homeButton.addEventListener ("click", () => {
	goHome();
});

function goHome() {
	document.getElementById ("home").style.visibility = "visible";
	document.getElementById ("main").style.visibility = "hidden";
	hideAnswer();
}

function goTask() {
	document.getElementById ("home").style.visibility = "hidden";
	document.getElementById ("main").style.visibility = "visible";
	questionIndex = 0;
}

function createCard (name, title, description, path) {
	let element = document.createElement ("div");
	let titleText = document.createElement ("span");
	let descriptionText = document.createElement ("span");

	element.classList.add ("Task-Card");
	titleText.classList.add ("Task-Title");
	descriptionText.classList.add ("Task-Description");

	element.id = "taskCard";

	titleText.innerText = title;
	descriptionText.innerText = description;

	element.appendChild (titleText);
	element.appendChild (descriptionText);

	element.addEventListener ("click", () => {
		loadTask(name);
		goTask();
	});

	document.getElementById ("home").appendChild (element);
}

function loadTask (taskName) {
	let element = document.createElement ("script");
	element.src = findArray (taskList, "name", taskName).path;
	document.body.appendChild (element);

	element.onload = () => {
		currentTask = new Task (questions);
	}
}

function randomInt (min, max) {
	return Math.round (Math.random() * (max - min) + min);
}

function findArray (array, key, value) {
	for (let i = 0; i < array.length; i++) {
		if (array[i][key] == value) {
			return array[i];
		}
	}
}
