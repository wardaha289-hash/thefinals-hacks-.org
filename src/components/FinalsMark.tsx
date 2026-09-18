type Props = {
	className?: string;
};

/** THE FINALS triangular mark (split-A icon). */
export default function FinalsMark({ className }: Props) {
	return (
		<svg
			className={className}
			viewBox="0 0 20 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path d="M1.6 18.4L9.4 1.6h1.5L4.4 18.4H1.6z" />
			<path d="M18.4 18.4L10.6 1.6H9.1l5.5 16.8h3.8z" />
		</svg>
	);
}
