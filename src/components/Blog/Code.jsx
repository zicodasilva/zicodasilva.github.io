import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeContainer = styled(SyntaxHighlighter)`
	width: 98%;
	position: relative;
	left: 10px;
`;

const Code = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");
		return !inline && match ? (
			<CodeContainer style={coldarkCold} language={match[1]} PreTag="div" {...props}>
				{String(children).replace(/\n$/, "")}
			</CodeContainer>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};

export default Code;
