import React from 'react';


const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '2px solid black', height: 'auto', width: '95vw', padding: '10px', margin: '10px', }}>
			{props.children}
		</div>
		)
};

export default Scroll; 