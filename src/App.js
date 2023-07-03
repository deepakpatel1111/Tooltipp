import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';
import { Tooltip, Button } from "@blueprintjs/core";

function App() {
	return (
		<div style={{
			display: 'block', width: 400, padding: 30
		}}>
			<h4>ReactJS Blueprint Tooltip Component</h4>
			<Tooltip content="I am sample tooltip info!" position='right'>
				<Button>Tooltip, Please Hover me</Button>
			</Tooltip>
		</div >
	);
}

export default App;
