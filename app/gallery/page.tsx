"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SelectLogo } from "@/db/schema";
import { allLogos } from "../actions/actions";
import Navbar from "@/components/landing/navbar";
import { useToast } from "@/hooks/use-toast";
import { displayedLogos } from "@/constants/data";
import LogoCard from "@/components/logo-card";

export default function Gallery() {
	const [logos, setLogos] = useState<SelectLogo[]>([]);
	const [showAll, setShowAll] = useState(false);
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchLogos = async () => {
			const fetchedLogos = await allLogos();
			if (fetchedLogos) {
				setLogos(fetchedLogos);
			} else {
				toast({
					title: "Error",
					description: "Failed to load logos",
					variant: "destructive",
				});
			}
		};

		fetchLogos();
	}, [toast]);

	const displayedLogos = showAll ? logos : logos.slice(0, 12);

	const handleDownload = (imageUrl: string) => {
		window.open(imageUrl, "_blank");
		toast({
			title: "Opening image",
			description: "The logo will open in a new tab",
		});
	};

	const SkeletonCard = () => {
		return (
			<Card className="group rounded-2xl">
				<CardContent className="w-full rounded-2xl">
					<div className="w-full rounded-t-2xl overflow-hidden aspect-square bg-slate-200 animate-pulse" />
					<div className="rounded-b-xl border-t p-4">
						<div className="flex justify-between items-center">
							<div className="h-6 bg-slate-200 rounded animate-pulse w-1/3" />
							<div className="h-4 bg-slate-200 rounded animate-pulse w-1/4" />
						</div>
						<div className="flex gap-2 my-2">
							<div className="w-6 h-6 rounded-[8px] bg-slate-200 animate-pulse" />
							<div className="w-6 h-6 rounded-[8px] bg-slate-200 animate-pulse" />
						</div>
						<div className="h-9 bg-slate-200 rounded animate-pulse w-full mt-2" />
					</div>
				</CardContent>
			</Card>
		);
	};

	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-6xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8">
				<h1 className="text-3xl font-bold mb-8">
					Recent
					<span className="bg-gradient-to-tr mx-2 from-white via-primary to-white bg-clip-text text-transparent">
						Generations
					</span>{" "}
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<LogoCard
						logos={displayedLogos}
						handleDownload={handleDownload}
					/>
				</div>
				{logos.length > 12 && (
					<div className="flex justify-center mt-8">
						<Button
							onClick={() => setShowAll(!showAll)}
							variant="outline"
							className="gap-2"
						>
							{showAll ? "Show Less" : "See More"}
							<ArrowRight className="h-4 w-4" />
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
