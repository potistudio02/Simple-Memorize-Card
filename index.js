const questionText = document.getElementById ("questionText");
const answerText = document.getElementById ("answerText");
const questionsLength = questions.length;

let questionIndex = 0;
let isTranslatable = true;

document.getElementById ("questionCard").addEventListener ("click", () => {
	if (isTranslatable)
		nextCard();
	else
		showAnswer();
});

function nextCard() {
	hideAnswer();
	questionIndex = randomInt(0, questionsLength - 1);
	questionText.innerText = questions[questionIndex].q;

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

function randomInt (min, max) {
	return Math.round (Math.random() * (max - min) + min);
}
