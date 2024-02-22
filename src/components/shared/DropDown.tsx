import { useEffect, useRef, useState, ReactElement, RefObject } from 'react';

type AllElementTypes = HTMLElement | Document | Window;

interface DropdownProps {
	children: ({
		isOpen,
		setIsOpen,
		toggleDropdown,
		wrapperRef
	}: {
		isOpen: boolean;
		setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
		toggleDropdown: () => void;
		wrapperRef: RefObject<AllElementTypes>;
		mouseEnter?: () => void;
		mouseLeave?: () => void;
		setActive?: (
			state?: boolean | ((prevState: boolean) => boolean)
		) => void;
	}) => ReactElement;
}

export default function Dropdown({ children }: DropdownProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isActive, setIsActive] = useState<boolean>(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			wrapperRef.current &&
			!wrapperRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	// Adding onMouseEnter and onMouseLeave event handlers
	const handleMouseEnter = () => {
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		setIsOpen(false);
	};

	function toggleActive(state?: boolean | ((prevState: boolean) => boolean)) {
		setIsActive(
			typeof state === 'function' ? state(isActive) : state ?? !isActive
		);
	}

	// We call the children function with the state, handlers, and mouse event handlers it needs
	return (
		<>
			{children({
				isOpen,
				setIsOpen,
				toggleDropdown,
				wrapperRef, // Including mouse event handlers for hover effect
				mouseEnter: handleMouseEnter,
				mouseLeave: handleMouseLeave,
				setActive: toggleActive
			})}
		</>
	);
}
