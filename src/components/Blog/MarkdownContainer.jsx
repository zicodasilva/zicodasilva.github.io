import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Typography } from "@mui/material";
import "katex/dist/katex.min.css";

import Code from "./Code";

const renderers = {
	...Code,
};

const MarkdownRenderer = (props) => {
	return (
		<div className="article-wrapper">
			<header>
				<Typography variant="h4">{props.title}</Typography>
				<Typography variant="caption" style={{float: "right"}}>{`Last update: ${props.date}`}</Typography>
			</header>
			<article>
				<Markdown
					remarkPlugins={[remarkMath, remarkGfm]}
					rehypePlugins={[rehypeKatex]}
					components={renderers}
					children={props.children}
				/>
			</article>
		</div>
	);
};

export default MarkdownRenderer;
