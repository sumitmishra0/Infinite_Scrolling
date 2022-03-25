let container = document.getElementById("container");

let page = 1;

let getData = async () => {
	let res = await fetch(
		`https://jsonplaceholder.typicode.com/albums?_page=${page}`
	);
	let data = await res.json();
	getScroll(data);
};

getData();

function getScroll(data) {
	data.map((currentEle) => {
		const { id } = currentEle;
		let htmlElement = `<div class="element">
      <h1>Masai Student ${id}</h1>
  </div>`;
		container.insertAdjacentHTML("beforeend", htmlElement);
	});
}

function showData() {
	setTimeout(() => {
		page++;
		getData();
	}, 10);
}

window.addEventListener("scroll", () => {
	const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
	if (scrollTop + clientHeight >= scrollHeight) {
		showData();
	}
});
