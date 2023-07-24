import React from "react";
import { Typography } from "@mui/material";

function WorkExperienceItem(props) {
	return (
		<div className="work-experience-container">
			<div className="work-experience-header">
				<Typography variant="caption">{props.header}</Typography>
			</div>
			<div className="work-experience-item">
				<div style={{display: "flex", flexDirection: "row"}}>
				<Typography variant="subtitle1">{props.title}</Typography>
				<Typography variant="subtitle1" marginLeft={1} marginRight={1}>&#8226;</Typography>
				<Typography variant="subtitle1">{props.position}</Typography>
				</div>
				<Typography variant="body2">{props.description}</Typography>
			</div>
		</div>
	);
}

export default WorkExperienceItem;
