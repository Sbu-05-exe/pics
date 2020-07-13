import React from 'react'

class ImageCard extends React.Component {
	state = {spans : 0}

	constructor (props) {
		super(props)
		this.imageRef = React.createRef()
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height/10)

		this.setState({spans: spans})
		// console.log(this.state)
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', ()=> {
			this.setSpans()
		});
	}

	render() {
		const { description, urls } = this.props.image 
		return (
			<div style={{gridRowEnd: `span ${this.state.spans}`}}>
				<img 
					
					src={urls.regular} 
					alt={description}
					ref={this.imageRef}
				/>
			</div>
		);
	};
};

export default ImageCard

