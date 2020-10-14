import React, { useState } from 'react';
import './index.scss';

// Components
import { Card } from '../';

// Cards data
import cards from '../../cards';

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
		cards.map(({ avialible, filling, content, weight, signature }, key) => (
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
				<div className="App__body__cards">{renderCards()}</div>
			</div>
		</div>
	);
};

export default App;
