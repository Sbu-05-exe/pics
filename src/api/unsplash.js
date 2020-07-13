import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
				Authorization: 'Client-ID 7oDwz8ASICQJPC4RJxq-E9hq3bVAo8wv73C3Syu-3Lk'
	}
});