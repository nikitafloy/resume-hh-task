import React from 'react';

export default [
	{
		filling: 'с фуа-гра',
		signature: 'Печень утки разварная с артишоками.',
		avialible: true,
		content: (
			<>
				<p>
					<b>10</b> порций
				</p>
				<p>мышь в подарок</p>
			</>
		),
		weight: (
			<>
				<p>0,5</p>
				<p>кг</p>
			</>
		),
	},
	{
		filling: 'с рыбой',
		signature: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
		avialible: true,
		content: (
			<>
				<p>
					<b>40</b> порций
				</p>
				<p>
					<b>2</b> мыши в подарок
				</p>
			</>
		),
		weight: (
			<>
				<p>2</p>
				<p>кг</p>
			</>
		),
	},
	{
		filling: 'с курой',
		signature: 'Филе из цыплят с трюфелями в бульоне.',
		avialible: false,
		content: (
			<>
				<p>
					<b>100</b> порций
				</p>
				<p>
					<b>5</b> мышей в подарок
				</p>
				<p>заказчик доволен</p>
			</>
		),
		weight: (
			<>
				<p>5</p>
				<p>кг</p>
			</>
		),
	},
];
