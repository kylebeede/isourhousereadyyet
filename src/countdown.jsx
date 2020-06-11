import React, { useEffect, useState } from 'react';
import ConfettiGenerator from "confetti-js";
import countdown from 'countdown';

const Countdown = ({ targetDate }) => {
	const [result, setResult] = useState();
	const [isPastTarget, setIsPastTarget] = useState(false);

	useEffect(function getResult() {
		setInterval(function renderCountdown() {
			const nowDate = Date.now();

			const countdownResult = countdown(nowDate, targetDate);

			setResult(countdownResult.toString());
			setIsPastTarget(nowDate > targetDate);
		}, 1000);
	}, [targetDate]);

	useEffect(() => {
		if (!isPastTarget) {
			return;
		}

		const confettiSettings = {
			target: 'confetti-canvas',
			max: 300,
			rotate: true,
		};
		const confetti = new ConfettiGenerator(confettiSettings);
		confetti.render();

		return () => confetti.clear();
	}, [isPastTarget]) // add the var dependencies or not

	const content = isPastTarget ? (
		<div className={'content'}>
			<img className={'contentImage'} src="./itshappening.gif" alt="Yes" />
			<span>{'Yes!!'}</span>
		</div>
	) : (<span>{'No :('}</span>);

	return !result ? null : (
		<>
			<canvas className={'confettiCanvas'} id={'confetti-canvas'}></canvas>
			<div className={'countdownContainer'}>
				<div className={'isItDoneYet'}>
					{content}
				</div>
				{isPastTarget ? null : (
				<div className={'timerContainer'}>
					<div className={'timerContainerHeader'}>{'Closing in:'}</div>
					<div className={'timerContent'}>{result}</div>
				</div>
				)}
			</div>
		</>
	)
};

export default Countdown;