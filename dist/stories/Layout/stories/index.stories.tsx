import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Layout } from "..";

export default {
	title: "Example/Layout",
	component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	bg_box: "brown",
	bg_box_content: ["red", "orange", "green", "blue", "yellow"],
	border_box_content: "2px solid black",
};
