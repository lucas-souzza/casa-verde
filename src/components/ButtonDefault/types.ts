import { ReactElement } from "react";

export interface ButtonDefaultProps {
	children: ReactElement | string;
	type: "submit" | "button";
	handleClick?: () => void;
	bgColor?: string;
}

export interface ButtonDefaultStyledProps {
	$bgColor: string;
}
