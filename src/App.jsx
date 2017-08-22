import "./App.scss";
import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: [],
		};
	}
	componentDidMount() {
	    fetch('http://localhost:3002/tweets').then((response) => {
	        return response.json();
	    }).then((data) => {
	        this.setState({ tweets: data });
		});
		 }
	render() {
		 const { tweets } = this.state;
		 return (<div className="App">
			<nav className="navbar navbar-dark bg-primary">
				<span className="h1" className="navbar-brand mb-0">Positive Tweets</span>
			</nav>
			{tweets.map((tweet) => {
				return (
					<div>
						<span className="card-text">{tweet.user.screen_name}</span>
						<ul className="list-group">
					  <li className="list-group-item">{tweet.text}</li>
						</ul>
					</div>
				);
			})
			}
		</div>);
	}
}
export default App;
