import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils";

const inputVariants = cva("block p-2 w-full border outline-none", {
	variants: {
		variant: {
			default: "bg-gray-50 border-gray-300 focus:border-blue-500",
			error: "bg-red-50 border-red-300 focus:border-red-500",
		},
	},
});

interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {}

const Input: React.FC<InputProps> = ({
	variant = "default",
	className,
	...props
}) => {
	const inputClass = cn(inputVariants({ variant, className }));
	return <input className={inputClass} {...props} />;
};

export default Input;
