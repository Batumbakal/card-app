import React from 'react';

export const Search = ({placeholder, searchAction}) => {
	return (<input 
		id="searchField" 
		type="search" 
		placeholder={placeholder} 
		onChange={searchAction}
	/>);
};