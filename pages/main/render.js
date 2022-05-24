document.addEventListener('DOMContentLoaded', () => {

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Add a click event on each of them
	$navbarBurgers.forEach(el => {
		el.addEventListener('click', () => {

			// Get the target from the "data-target" attribute
			const target = el.dataset.target;
			const $target = document.getElementById(target);

			// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');

		});
	});

});

document.addEventListener('keydown', (e) => {
	if (e.code === 'Tab') {
		e.preventDefault();

		const TAB_WIDTH = 4;

		//* Apply 1 space for every tab width
		document.execCommand('insertText', false, ' '.repeat(TAB_WIDTH));
	}
});

//* Load file button
async function loadFile() {
	[fileHandle] = await window.showOpenFilePicker();

	//* get file contents
	const fileData = await fileHandle.getFile();
	let text = await fileData.text();
	// console.log(text);

	//* Set custom title for each file
	let title = document.getElementById("title");
	title.innerText = fileData.name;

	let content = document.getElementById("text");
	content.innerText = text;
}

const downloadToFile = (content, filename, contentType) => {
	const a = document.createElement('a');
	const file = new Blob([content], {type:contentType});

	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();

	URL.revokeObjectURL(a.href);
}

document.getElementById('saveBtn').addEventListener('click', () => {
	const text = document.getElementById('text');
	const title = document.getElementById('title');

	downloadToFile(text.innerText, title.innerText, 'text/plain');
});

function debugText() {
	let title = document.getElementById("title");
	let content = document.getElementById("text");

	console.log(title.innerText);
	console.log(content.innerText);
}

function alertOnExit() {
	if (confirm("You may save your file before quitting the page.")) {
		document.getElementById('saveBtn').click();
	}
	else {
		console.log('gods');
	}
}