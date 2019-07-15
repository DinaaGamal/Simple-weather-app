import React from 'react';
import './SeasonDisplay.css';

const getSeason = (Lat, month) => {
	if (month > 2 && month < 9) {
		return Lat > 0 ? 'Summer' : 'Winter';
	} else {
		return Lat > 0 ? 'Winter' : 'Summer';
	}
};
const configSeason = {
	Winter: {
		Text: "Burr It's Winter..",
		icon: 'snowflake'
	},
	Summer: {
		Text: "Its Summer..Let's hit the beach :)",
		icon: 'sun'
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.Lat, new Date().getMonth());
	const { Text, icon } = configSeason[season];
	return (
		<div className={` season-display ${season}`}>
			<i className={`icon-left massive ${icon} icon`} />
			<h2>{Text}</h2>
			<i className={`icon-right massive ${icon} icon`} />
		</div>
	);
};

export default SeasonDisplay;
