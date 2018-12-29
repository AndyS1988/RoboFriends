import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='searchBar'>
			<input 
				type='search' 
				placeholder='Search Robots by Name'
				onChange={searchChange}	
				/>
			</div>
		);
}

export default SearchBox;