import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] }

	onSearchSubmit = async (term) => {
		// the axios.get function is a promise. We could attach a.then function to 
		// the end of it which takes a response argument and log that to the console
		// Or we can do it the way it is done here
		const response = await unsplash.get('/search/photos', {
			params: {query:term},
		});

		this.setState({images: response.data.results})
		// console.log(response.data.results)
	};

	render() {
		return (
			<div  className='ui container' style={ {marginTop: '10px',}}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				<ImageList images={this.state.images}/>
			</div>
		);
	};
}

export default App