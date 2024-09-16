document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.button-search');

	form.addEventListener('submit', function (event) {
			event.preventDefault();
			const searchText = form.querySelector('input[type="text"]').value;
			const foundElement = document.evaluate(
					'//*[contains(text(), "' + searchText + '")]',
					document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null
			);
			if (foundElement.snapshotLength > 0) {
					foundElement.snapshotItem(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
			} else {
					alert('Такого десерта нет..(');
			}
	});
});