import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((user, i) => {
				return <Card id={[i]} name={robots[i].name} email={robots[i].email} />;
			})}
			;
		</div>
	);
};
//Note sfklbjsfiu

export default CardList;
