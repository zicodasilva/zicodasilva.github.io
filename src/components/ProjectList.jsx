import React from "react";
import { List, ListItem } from "@mui/material";

import ProjectItem from "./ProjectItem";

function ProjectList(props) {
	return (
		<List dense={false}>
			<ListItem>
				<ProjectItem
					title="3D Pose Editor"
					description="A web application for editing (generating 3D ground truth) of the cheetah 3D postures."
				/>
			</ListItem>
			<ListItem>
				<ProjectItem title="AcinoSet" description="A cheetah running dataset." />
			</ListItem>
			<ListItem>
				<ProjectItem
					title="Telemetry Device"
					description="Telemetry device to relay environment information to a central server for processing. The device uses the EFR32 MCU series."
				/>
			</ListItem>
			<ListItem>
				<ProjectItem
					title="Visualisation of Tracking Software"
					description="Web applications to visualise tracking backend systems using web technologies (CesiumJS)."
				/>
			</ListItem>
			<ListItem>
				<ProjectItem
					title="In-house Management System"
					description="Web application for project management at Peralex Electronics."
				/>
			</ListItem>
		</List>
	);
}

export default ProjectList;
