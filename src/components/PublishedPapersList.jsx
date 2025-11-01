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
					<Typography variant="body2">
						Improving 3D Markerless Pose Estimation of Animals in the Wild using Low-Cost Cameras
					</Typography>
				</Link>
			</ListItem>
			<ListItem>
				<Link href="https://journals.biologists.com/jeb/article/226/Suppl_1/jeb245122/307101/Chasing-the-cheetah-how-field-biomechanics-has"
					// underline="hover"
					target="_blank"
					color="text.primary">
				<Typography variant="body2">
					Chasing the Cheetah: How field biomechanics has evolved to keep up with the fastest land animal
				</Typography>
				</Link>
			</ListItem>
			<ListItem>
				<Link
					href="https://www.nature.com/articles/s41598-024-60731-1"
					// underline="hover"
					target="_blank"
					color="text.primary"
				>
					<Typography variant="body2">
						Markerless 3D kinematics and force estimation in cheetahs
					</Typography>
				</Link>
			</ListItem>
			<ListItem>
				<Link
					href="https://ieeexplore.ieee.org/abstract/document/10802061"
					// underline="hover"
					target="_blank"
					color="text.primary"
				>
					<Typography variant="body2">
						Monocular 3D Reconstruction of Cheetahs in the Wild
					</Typography>
				</Link>
			</ListItem>
		</List>
	);
}

export default PublishedPapersList;
