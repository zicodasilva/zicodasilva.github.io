import React from "react";
import { Typography, List, ListItem, Link } from "@mui/material";

function PublishedPapersList(props) {
	return (
		<List dense={true}>
			<ListItem>
				<Link
					href="https://ieeexplore.ieee.org/abstract/document/9981746"
					// underline="hover"
					target="_blank"
					color="text.primary"
				>
					<Typography variant="body1">
						Improving 3D Markerless Pose Estimation of Animals in the Wild using Low-Cost Cameras
					</Typography>
				</Link>
			</ListItem>
			<ListItem>
				{/* <Link href="#" target="_blank" color="text.primary"> */}
				<Typography variant="body1">
					*Chasing the Cheetah: How field biomechanics has evolved to keep up with the fastest land animal
				</Typography>
				{/* </Link> */}
			</ListItem>
			<ListItem>
				<Typography variant="body1">* Release pending</Typography>
			</ListItem>
		</List>
	);
}

export default PublishedPapersList;
