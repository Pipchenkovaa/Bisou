function sortList() {
	let list, i, switching, b, shouldSwitch, dir, switchcount = 0;
	list = document.getElementById("sort-list");
	switching = true;
	dir = "asc";

	while (switching) {
			switching = false;
			b = list.getElementsByClassName("cake");
			for (i = 0; i < (b.length - 1); i++) {
					shouldSwitch = false;

					if (dir == "asc") {
							if (getPrice(b[i]) > getPrice(b[i + 1])) {
									shouldSwitch = true;
									break;
							}
					} else if (dir == "desc") {
							if (getPrice(b[i]) < getPrice(b[i + 1])) {
									shouldSwitch = true;
									break;
							}
					}
			}
			if (shouldSwitch) {
					b[i].parentNode.insertBefore(b[i + 1], b[i]);
					switching = true;
					switchcount++;
			} else {
					if (switchcount == 0 && dir == "asc") {
							dir = "desc";
							switching = true;
					}
			}
	}
}
function getPrice(cakeElement) {
	const priceText = cakeElement.querySelector(".price").getAttribute("text");
	const price = parseInt(priceText.replace(/[^\d]/g, ""));
	return price;
}