var simplemde = new SimpleMDE({
	element: document.getElementById("editor"),
	autoDownloadFontAwesome: false,
	autofocus: true,
	autosave: { enabled: true, delay: 100, uniqueId: "notedown.vasanthv.com" },
	spellChecker: false,
	status: false,
	placeholder: "Start typing here...",
	toolbar: [{
			name: "bold",
			action: SimpleMDE.toggleBold,
			className: "icon-bold",
			title: "Bold",
		}, {
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
			name: "download",
			action: e => download("notedown.md", e.value()),
			className: "icon-download",
			title: "Download",
		}
	]
});

function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}
