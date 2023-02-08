import React from "react";
import { List, ListItem, Link, Typography, Divider } from "@mui/material";

import ProjectItem from "./ProjectItem";

function ProjectList(props) {
	return (
		<List dense={false}>
			<Typography variant="subtitle1">Research</Typography>
			<Divider flexItem />
			<ListItem>
				<ProjectItem
					title={
						<Link
							href="https://github.com/African-Robotics-Unit/AcinoSet"
							// underline="hover"
							target="_blank"
							color="text.primary"
						>
							AcinoSet
						</Link>
					}
					description="Contributed to the creation of AcinoSet, the first cheetah running dataset. Published a paper, 'Improving 3D Markerless Pose Estimation of Animals in the Wild using Low-Cost Cameras', in IROS 2022. AcinoSet was developed using Python, trajectory optimisation (Pyomo/IPOPT), and pose estimation (DeepLabCut)."
				/>
			</ListItem>
			<Typography variant="subtitle1">{`Peralex ${"\u2014"} as lead engineer`}</Typography>
			<Divider flexItem />
			<ListItem>
				<ProjectItem
					title="Telemetry Device"
					description="An energy-efficient telemetry device that collects environmental data to send to a central server for post-processing and visualisation. 1000+ devices were deployed and have been operating for over five years (details confidential). Technologies used: C/C++ for embedded systems, web (NodeJS, JavaScript, HTML, and CSS), and mobile (React Native)."
				/>
			</ListItem>
			<ListItem>
				<ProjectItem
					title="Passive Radar Visualisation"
					description="Live flight tracking web app that connects to a passive radar system. CesiumJS was used for 3D geospatial visualisation, and the system supports live analysis of flight data. The web app was developed using NodeJS, JavaScript, WebSockets, HTML, and CSS."
				/>
			</ListItem>
			<ListItem>
				<ProjectItem
					title="Navigation Radar Visualisation"
					description="A web-based vessel tracking visualisation application. Includes time and frequency domain plots, and a CesiumJS map view (details confidential). The system comprises of a frontend web application (developed using ReactJS, JavaScript, WebSockets, HTML, and CSS) and a backend data processing server (developed using C++ and ZeroMQ)."
				/>
			</ListItem>
			<ListItem>
				<ProjectItem
					title="In-house Management System"
					description="A product and project management platform for Peralex Electronics (details confidential). Serves 50+ employees and has been in operation for over a year. The web app was developed using full stack web technologies: ReactJS, WebSockets, NodeJS, PostgreSQL and Docker."
				/>
			</ListItem>
		</List>
	);
}

export default ProjectList;
