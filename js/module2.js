import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	constructor() {
		super();
		this.name = "Bob";
	}
	
	getVal(c) {
		return "Xixix" + c;
	}

	render() {
		return (
			<h1>Works {this.name} {3* 31} {this.getVal("mumu")}!</h1>
		);
	}
}

console.log('huhu');
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);