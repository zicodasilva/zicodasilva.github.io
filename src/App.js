import React from "react";

import { Routes, Route, Outlet, Link as Link2 } from "react-router-dom";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import { userPrefs } from "./utils";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import "./App.css";
import { Typography } from "@mui/material";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="blog/*" element={<Blog />} />
			<Route path="*" element={<Typography margin={3}>404: Not found :(</Typography>} />
		</Routes>
	);
}

export default function ToggleColorMode() {
	const [mode, setMode] = React.useState(userPrefs.get("darkTheme") === "true" ? "dark" : "light");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[],
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "light"
						? {
								background: {
									default: "#FFF8E9",
								},
								text: {
									primary: "#000",
								},
						  }
						: {
								background: {
									default: "#121212",
								},
								text: {
									primary: "#FFF8E9",
								},
						  }),
				},
				typography: {
					fontFamily: "Helvetica Neue",
				},
			}),
		[mode],
	);

	React.useEffect(() => {
		userPrefs.set("darkTheme", mode === "light" ? "false" : "true");
	}, [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
