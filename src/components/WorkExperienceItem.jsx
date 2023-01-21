import React from "react";
import { Typography } from "@mui/material";

function WorkExperienceItem(props) {
	return (
		<div className="work-experience-container">
			<div className="work-experience-header">
				<Typography variant="caption">{props.header}</Typography>
			</div>
			<div className="work-experience-item">
				<Typography variant="subtitle1">{props.title}</Typography>
				<Typography variant="body2">{props.description}</Typography>
			</div>
		</div>
	);
}

export default WorkExperienceItem;
