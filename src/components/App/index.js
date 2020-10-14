import React, { useState } from 'react';
import './index.scss';

import { Card } from '../';

const food = [
	{
		filling: 'с фуа-гра',
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
		signature: 'Печень утки разварная с артишоками.',
		avialible: true,
	},
	{
		filling: 'с рыбой',
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
		signature: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
		avialible: true,
	},
	{
		filling: 'с курой',
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
		signature: 'Филе из цыплят с трюфелями в бульоне.',
		avialible: false,
	},
];

const App = () => {
	const [state, setState] = useState({ cart: [] });

	const onClickHandler = (id) => {
		let cart = state.cart;
		const candidate = cart.findIndex((item) => item === id);
		candidate === -1 ? cart.push(id) : cart.splice(candidate, 1);
		localStorage.setItem('prevState', JSON.stringify(state.cart));
		setState({ ...state, cart });
	};

	const renderCards = () =>
		food.map(({ avialible, filling, content, weight, signature }, key) => (
			<Card
				id={key}
				key={key}
				filling={filling}
				content={content}
				weight={weight}
				signature={signature}
				avialible={avialible}
				choose={state.cart.indexOf(key) !== -1}
				onClickHandler={onClickHandler}
			/>
		));

	return (
		<div className="App">
			<div className="App__body">
				<div className="App__body__title">Ты сегодня покормил кота?</div>
				{renderCards()}
			</div>
		</div>
	);
};

export default App;
