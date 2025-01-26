import { IconSparkles } from "@tabler/icons-react";
import { IconPointerFilled } from "@tabler/icons-react";
import FloatingIcons from "../floating-icons";
import Gradient from "../gradient";
import { Button } from "../ui/button";
import { LogoCarousel } from "../ui/logo-carousel";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { domain } from "@/lib/domain";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

export default function Hero() {
	const { isSignedIn } = useUser();
	const router = useRouter();

	return (
		<>
			<div className="relative overflow-hidden">
				<section className="flex max-w-6xl mx-auto relative flex-col items-center justify-center h-full pt-28 px-4 sm:pt-44">
                    <div className={cn("group relative rounded-full border border-black/5 bg-neutral-100 text-sm sm:text-base max-sm:mb-2 text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800")}>
                        <AnimatedShinyText className="inline-flex items-center">
                            <span>✨ Powered by <Link href="https://dub.sh/nebius" target="_blank">
                            Nebius AI</Link></span>
                            <ArrowRightIcon className="ml-1 size-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>
					<Gradient />
					<FloatingIcons />
					<div className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-medium text-center">
						Create stunning logos with <br />{" "}
						<span className="font-semibold bg-gradient-to-tr from-white via-primary to-white bg-clip-text text-transparent">
							AI powered
						</span>{" "}
						design
					</div>

					<div className="text-base md:text-lg mt-8 font-bold w-full lg:w-[50%] text-center text-neutral-500">
						Generate unique,{" "}
						<span className="text-neutral-900 font-extrabold dark:font-bold dark:text-neutral-300">
							professional
						</span>{" "}
						logos in seconds. <br className="md:block hidden" />
						<span className="text-neutral-900 font-extrabold dark:font-bold dark:text-neutral-300">
							Perfect for
						</span>{" "}
						businesses, startups, and personal brands.
					</div>

					<div className="mt-10 flex sm:flex-row flex-col w-full md:w-auto items-center gap-4">
						{isSignedIn ? (
							<Button
								onClick={() => router.push("/generate")}
								className="h-8 w-full md:w-auto px-6 py-5"
							>
								Go to Dashboard{" "}
								<IconPointerFilled className="w-4 h-4" />
							</Button>
						) : (
							<SignedOut>
								<SignInButton
									signUpForceRedirectUrl={`${domain}/generate`}
									forceRedirectUrl={`${domain}/generate`}
								>
									<Button className="text-sm">Sign In</Button>
								</SignInButton>
							</SignedOut>
						)}
						<Link href="/gallery" className="w-full md:w-auto">
							<Button
								variant="outline"
								className="h-8 w-full px-6 py-5 transition-all hover:shadow-[0_0_20px_2px_hsl(var(--primary))]"
							>
								See Examples{" "}
								<IconSparkles className="fill-[hsl(var(--primary))] text-primary dark:fill-[hsl(var(--foreground))] dark:text-foreground" />
							</Button>
						</Link>
					</div>
					<LogoCarousel />
				</section>
			</div>
		</>
	);
}
