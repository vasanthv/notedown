const simplemde = new SimpleMDE({
	element: document.getElementById("editor"),
	autoDownloadFontAwesome: false,
	autofocus: true,
	autosave: { enabled: true, delay: 100, uniqueId: "notedown.veeapp.co" },
	spellChecker: false,
	status: false,
	placeholder: "Start typing here...",
	toolbar: [
		{
			name: "bold",
			action: SimpleMDE.toggleBold,
			className: "icon-bold",
			title: "Bold",
		},
		{
			name: "italic",
			action: SimpleMDE.toggleItalic,
			className: "icon-italic",
			title: "Italic",
		},
		{
			name: "heading",
			action: SimpleMDE.toggleHeadingSmaller,
			className: "icon-header",
			title: "Heading",
		},
		{
			name: "unordered-list",
			action: SimpleMDE.toggleUnorderedList,
			className: "icon-list-ul",
			title: "Unordered list",
		},
		{
			name: "ordered-list",
			action: SimpleMDE.toggleOrderedList,
			className: "icon-list-ol",
			title: "Ordered list",
		},
		{
			name: "link",
			action: SimpleMDE.drawLink,
			className: "icon-link",
			title: "Toggle link",
		},
		{
			name: "image",
			action: SimpleMDE.drawImage,
			className: "icon-image",
			title: "Image",
		},
		{
			name: "quote",
			action: SimpleMDE.toggleBlockquote,
			className: "icon-quote-right",
			title: "Quote",
		},
		{
			name: "preview",
			action: SimpleMDE.togglePreview,
			className: "icon-eye no-disable",
			title: "Preview",
		},
		{
			name: "what",
			action: toggleHelp,
			className: "icon-question-circle no-disable",
			title: "What is this?",
		},
		{
			name: "download",
			action: (e) => download("notedown.md", e.value()),
			className: "icon-download no-disable",
			title: "Download",
		},
	],
});

function toggleHelp() {
	const helpElement = document.getElementById("help");
	if (helpElement.classList.contains("show")) {
		setTimeout(() => {
			helpElement.style.zIndex = "0";
		}, 300);
	} else {
		helpElement.style.zIndex = "100";
	}
	helpElement.classList.toggle("show");
}

function download(filename, text) {
	const element = document.createElement("a");
	element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
	element.setAttribute("download", filename);
	element.style.display = "none";
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

window.onscroll = function (evt) {
	document.querySelector(".editor-toolbar").style.boxShadow =
		window.scrollY >= 32 ? "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" : "none";
};

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/sw.js");
} else {
}
