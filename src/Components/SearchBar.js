import React from 'react';

class SearchBar extends React.Component {
	state = { term:'' }

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form 
					className="ui form"
					onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label htmlFor="">Image search
							<input 
								type="text"
								value={this.state.term}
								onChange={(e) => {this.setState({term: e.target.value})}}/>
						</label>
					</div>					
				</form>
			</div>
		)
	};
}

export default SearchBar;

//Hint onInput Change is a callback for our onChange. This means that every time that
//text changes on the input the onInputChange event will be automatically fired.
//NOTE do not insert parenthesis.



// If the callback only executes a single line of code we would rather use an arrow
// function. When we do this instead of naming the event argument event we give it 
// a name of e. This is done to condense our code so that our code doesn't run over the page