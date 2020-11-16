import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyB8i6N9DH7WYbjdZoc6qeRF-avsxax_lyI";
class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onFormSubmitClick("cars");
	}

	onFormSubmitClick = async term => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
				part: "snippet",
				maxResults: 10,
				type: "video",
				key: KEY,
			},
		});
		console.log(response);
		//console.log(response.data.items);
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div style={{ backgroundColor: "black" }}>
				<SearchBar onSubmit={this.onFormSubmitClick} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
