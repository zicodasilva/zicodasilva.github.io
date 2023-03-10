import React, { useState, useEffect } from "react";

import "./Post.css";
import MarkdownRenderer from "../MarkdownContainer";

const Post = () => {
	const [postContent, setPostContent] = useState("");

	useEffect(() => {
		import("../../../assets/welcome.md").then((res) =>
			fetch(res.default)
				.then((response) => response.text())
				.then((response) => setPostContent(response))
				.catch((err) => console.log(err)),
		);
	}, []);

	return (
		<MarkdownRenderer title="Welcome" date="2023-03-10">
			{postContent}
		</MarkdownRenderer>
	);
};

export default Post;
