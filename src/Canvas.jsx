import React, { useState } from "react";


function Canvas(props){
	const [children, setChildren] = useState([]);
	return (
		<div>
			{children}
		</div>
	)
}

export default Canvas;


