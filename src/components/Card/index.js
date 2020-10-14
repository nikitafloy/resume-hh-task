import React, { useState } from 'react';
import './index.scss';

const Card = ({
	id,
	filling,
	signature,
	avialible,
	choose,
	content,
	weight,
	onClickHandler,
}) => {
	const prevState = localStorage.getItem('prevState');
	const candidate = prevState
		? JSON.parse(prevState).findIndex((item) => console.log(item, id)) === -1
		: null;

	const [hover, setHover] = useState(false);
	const changed = prevState ? candidate && choose : false;

	let color = avialible ? (choose ? 'dark-pink' : 'dark-blue') : 'disable';

	if (avialible) {
		color = hover
			? color === 'dark-pink'
				? changed
					? 'dark-pink'
					: 'pink'
				: color === 'pink'
				? 'pink'
				: 'blue'
			: color;
	}

	const pinkSignature = color === 'pink' ? 'Card__self__signature_pink' : '';

	const mouseEvent = (toggle) => {
		if (avialible) setHover(toggle);
		if (changed && !toggle) localStorage.removeItem('prevState');
	};

	return (
		<div
			className="Card"
			onMouseEnter={() => mouseEvent(true)}
			onMouseLeave={() => mouseEvent(false)}
		>
			<div
				className={`Card__self Card__self_${color}`}
				onClick={() => onClickHandler(id)}
			>
				<div className={`Card__self__signature ${pinkSignature}`}>
					{pinkSignature ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}
				</div>

				<h1>Нямушка</h1>
				<h2>{filling}</h2>

				<div className="Card__self__content">{content}</div>
			</div>

			<div className="Card__weight">
				<div className={`Card__weight Card__weight_${color}`}>{weight}</div>
			</div>

			<div className="Card__signature">
				{avialible ? (
					choose ? (
						signature
					) : (
						<>
							Чего сидишь? Порадуй котэ,{' '}
							<a href="#buy" onClick={() => onClickHandler(id)}>
								купи
							</a>
							.
						</>
					)
				) : (
					<span style={{ color: '#FFFF66' }}>
						Печалька, {filling} закончился.
					</span>
				)}
			</div>
		</div>
	);
};

export default Card;
