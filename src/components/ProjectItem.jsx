import React from "react";
import { Typography } from "@mui/material";

function ProjectItem(props) {
	return (
		<div className="work-experience-container">
			<div className="work-experience-header">
				<Typography variant="subtitle1">{props.title}</Typography>
			</div>
			<div className="work-experience-item">
				<Typography variant="body2">{props.description}</Typography>
			</div>
		</div>
	);
}

export default ProjectItem;
