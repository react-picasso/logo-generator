import Link from "next/link";
import { useEffect, useState } from "react";
import { ToggleTheme } from "../theme-toggler";
import { Button } from "../ui/button";
import { LoaderIcon } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { domain } from "@/lib/domain";

export default function Navbar() {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<header className="fixed max-w-6xl mx-auto px-4 top-0 left-0 right-0 z-50">
			<nav className="backdrop-blur-md text-sm rounded-xl mt-4 flex justify-between items-center py-2 px-5">
				<Link href="/" className="font-semibold flex-1">
					Logek
				</Link>
				<div className="hidden md:flex items-center font-semibold space-x-8">
					<Link href="/generate">Generate</Link>
					<Link href="/gallery">Gallery</Link>
					<Link href="/pricing">Pricing</Link>
				</div>
				<div className="flex items-center flex-1 justify-end space-x-4">
					<ToggleTheme />
					{!isMounted && (
						<Button>
							<LoaderIcon className="animate-spin" />
						</Button>
					)}
					<SignedOut>
						<SignInButton
							signUpForceRedirectUrl={`${domain}/generate`}
							forceRedirectUrl={`${domain}/generate`}
						>
                            <Button className="text-sm">Sign In</Button>
                        </SignInButton>
					</SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
				</div>
			</nav>
		</header>
	);
}