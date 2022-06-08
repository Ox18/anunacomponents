import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

interface IProps {
	children?: React.ReactNode;
	bg_box?: string;
	bg_box_content?: string | string[];
	border_box_content?: string;
	padding?: string[];
}

export const Layout: React.FC<IProps> = ({
	children,
	bg_box,
	bg_box_content,
	border_box_content,
	padding = ["24px 24px", "24px 24px", "40px 40px", "40px 40px", "80px 80px"],
}) => {
	return (
		<ChakraProvider>
			<Box bg={bg_box}>
				<Box
					bg={bg_box_content}
					border={border_box_content}
					p={padding}
					margin="0 auto"
					maxWidth="1440px"
					width="100%"
				>
					{children}
				</Box>
			</Box>
		</ChakraProvider>
	);
};
