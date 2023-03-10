import React from "react";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Typography, Divider, List, ListItem, Link } from "@mui/material";
import { Route, Routes, Link as Link2 } from "react-router-dom";

import { ColorModeContext } from "../App";
import { Welcome, GrafanaLoki } from "../components/Blog/Posts";
import "../App.css";

export function Blog() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	return (
		<Box
			sx={{
				bgcolor: "background.default",
				color: "text.primary",
				width: "100%",
				// height: "100vh",
			}}
		>
			<header>
				<IconButton
					sx={{ ml: 1 }}
					onClick={colorMode.toggleColorMode}
					color="inherit"
					style={{ float: "right" }}
				>
					{theme.palette.mode === "dark" ? <LightModeIcon /> : <Brightness2Icon />}
				</IconButton>
			</header>
			<div className="main-component">
				<div className="left-pane">
					<Typography variant="h5">Posts</Typography>
					<Divider flexItem />
					<List dense={true}>
						<ListItem>
							<Typography variant="body2">
								<Link2 to="/blog/grafana-loki" style={{ color: "inherit" }}>
									Grafana Loki
								</Link2>
							</Typography>
						</ListItem>
					</List>
				</div>
				<div className="right-pane" style={{ flex: "3 1 0", marginRight: "20px" }}>
					<Divider flexItem />
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route path="grafana-loki" element={<GrafanaLoki />} />
					</Routes>
				</div>
				<div className="right-pane" style={{ flex: "1 1 0" }}>

				</div>
			</div>
		</Box>
	);
}
