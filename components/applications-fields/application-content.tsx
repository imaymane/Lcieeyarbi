import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/button";

type DivProps = Omit<React.HTMLAttributes<HTMLDivElement>, "type">;

interface ApplicationContentProps extends DivProps {
	title?: string;
	description?: string;
	type?: string;
	image?: string;
	onClick?: () => void;
}

function ApplicationContent({
	title,
	description,
	image,
	onClick,
	...props
}: ApplicationContentProps) {
	return (
		<div
			className="relative flex flex-col items-center justify-center w-full space-y-6"
			{...props}
		>
			<Button
				icon={faArrowLeft}
				className="absolute top-6 left-0"
				onClick={onClick}
			></Button>
			<div className="relative w-[60%]">
				<img src={image} alt={title} />
			</div>
			<div className="text-2xl font-bold text-center">{title}</div>
			<div className="text-center">{description}</div>
		</div>
	);
}

export default ApplicationContent;
