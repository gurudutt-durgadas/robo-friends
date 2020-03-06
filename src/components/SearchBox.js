import React from 'react';

const SearchBox = ({searchString, searchChange}) => {

	return(
			<div className='pa2'>
				<input
					className = 'pa3 ma2 b--green bg-lightest-blue' 
					type='search' 
					placeholder = 'search robots'
					onChange = {searchChange} 
				/>
			</div>
		);
}

export default SearchBox;