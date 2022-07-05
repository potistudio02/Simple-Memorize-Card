// CONST Variales that Contain DOM Element
const questionText = document.getElementById ("questionText");
const answerText = document.getElementById ("answerText");
const homeButton = document.getElementById ("homeButton");

let questionIndex = 0;
let isTranslatable = true;
let currentTask;

class Task {
	questions;
	currentIndex = 0;

	constructor (questions) {
		this.questions = questions;
	}

	getQuestionByIndex (index) {
		this.currentIndex = index;
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
		targets: document.getElementById ("questionTextContainer"),
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
		targets: document.getElementById ("questionTextContainer"),
		translateY: [-50, 0],
		opacity: [0, 1],
		duration: 1000,
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
	anime ({
		targets: [document.getElementById ("home"), document.getElementById ("main")],
		translateX: [-window.innerWidth, 0],
		duration: 500,
		easing: "easeInOutExpo"
	});

	hideAnswer();
}

function goTask() {
	anime ({
		targets: [document.getElementById ("home"), document.getElementById ("main")],
		translateX: [0, -window.innerWidth],
		duration: 500,
		easing: "easeInOutExpo"
	});

	questionIndex = 0;
	questionText.innerText = "問題";
	isTranslatable = true;
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
