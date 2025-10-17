import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md font-semibold",
	{
		variants: {
			variant: {
				default: "bg-gray-500 hover:bg-gray-700 hover:text-white",
				primary: "bg-blue-500 hover:bg-blue-700 hover:text-white",
				secondary: "bg-purple-500 hover:bg-purple-700 hover:text-white",
				success: "bg-green-500 hover:bg-green-700 hover:text-white",
			},
			size: {
				default: "py-2 px-4",
				sm: "py-1 px-3 text-xs",
				md: "py-1.5 px-4 text-sm",
				lg: "py-2 px-6 text-md",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	label?: string;
	icon?: IconProp | null;
}

function Button({
	label = "",
	icon = null,
	variant,
	size,
	className,
	disabled,
	...props
}: ButtonProps) {
	const buttonClass = cn(buttonVariants({ variant, size, className }));
	return (
		<button
			className={cn(buttonClass, {
				"opacity-50 bg-gray-500 pointer-events-none": disabled,
			})}
			{...props}
		>
			{label}
			{icon && (
				<FontAwesomeIcon icon={icon} className={` ${label ? "pl-2" : ""}`} />
			)}
		</button>
	);
}

export default Button;
