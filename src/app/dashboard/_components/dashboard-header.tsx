import {
	LogOut,
	LucideHome,
	LucideMenu,
	LucideUser,
	Moon,
	Sun
} from 'lucide-react';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/use-theme';
import useViewPort from '@/hooks/use-viewport';
import { useRouter } from 'next/navigation';
import useAuthHook from '@/hooks/use-auth-hook';
import { Button } from '@/components/ui/button';
type DashboardHeaderProps = {
	handleMenubarToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function DashboardHeader({
	handleMenubarToggle
}: DashboardHeaderProps) {
	const { setTheme } = useTheme();
	const { logout } = useAuthHook();
	const router = useRouter();
	const { isDesktop, isLaptop, isMobile } = useViewPort();
	return (
		<div className="sticky top-0 bg-white z-10 shadow w-full border-b h-16 flex items-center justify-between px-4">
			<div>
				<div className="flex items-center justify-start gap-4 px-4 disabled:cursor-not-allowed">
					<button
						className="flex items-center justify-start gap-4 md:hidden "
						onClick={handleMenubarToggle}
						disabled={isDesktop || isLaptop}
					>
						<LucideMenu />
					</button>
					<button
						className="flex items-center justify-start gap-4  "
						onClick={() => router.push('/')}
					>
						<LucideHome />
					</button>

					<h1 className="hidden md:block font-bold text-xl">
						Dashboard
					</h1>
				</div>
			</div>
			<div className="hidden items-center justify-start gap-4 px-4">
				<div className="flex items-center justify-start gap-4 px-4 border">
					<input type="text" />
					<button>Search</button>
				</div>
			</div>
			<div className="flex items-center justify-start gap-2  text-black">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">
							<LucideUser />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								Profile
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								Billing
								<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								Settings
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								Keyboard shortcuts
								<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>Team</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									Invite users
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										<DropdownMenuItem>
											Email
										</DropdownMenuItem>
										<DropdownMenuItem>
											Message
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											More...
										</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuItem>
								New Team
								<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>GitHub</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuItem disabled>API</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<button
								onClick={logout}
								className="flex items-center gap-2"
							>
								<LogOut size={isMobile ? 20 : 24} />{' '}
								<span>Logout</span>
							</button>

							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>{' '}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon">
							<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => setTheme('light')}>
							Light
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('dark')}>
							Dark
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('system')}>
							System
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}