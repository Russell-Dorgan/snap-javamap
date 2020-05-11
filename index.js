// const numbers = [1, 2, 3, 4,];
//
// const filtered = numbers.filter(n => n >= 0);
//
// const items = filtered.map(n => '<li>' + n + '</li>')
//
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);





const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

const filtered = numbers.filter(n => n <= 5);

//callback function
const items = filtered.map(n => {
	return { value: n };
});

console.log(items);








// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
//
// const items = numbers
// 	.filter(n => n <= 5)
// 	.map(n => ({ value: n }) );
//
// console.log(items);

