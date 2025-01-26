"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SelectLogo } from "@/db/schema";
import { checkHistory } from "../actions/actions";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/landing/navbar";
import LogoCard from "@/components/logo-card";
const SAMPLE_LOGOS = [
	{
		id: 1,
		companyName: "TechFlow",
		style: "Minimal",
		primaryColor: "#2563EB",
		backgroundColor: "#FFFFFF",
		imageUrl:
			"https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=400&fit=crop",
		createdAt: "2024-03-20T10:30:00Z",
	},
	{
		id: 2,
		companyName: "GreenLeaf",
		style: "Organic",
		primaryColor: "#059669",
		backgroundColor: "#F0FDF4",
		imageUrl:
			"https://images.unsplash.com/photo-1557683311-eac922347aa1?w=400&h=400&fit=crop",
		createdAt: "2024-03-19T15:45:00Z",
	},
];
export default function History() {
	const [logos, setLogos] = useState<SelectLogo[]>([]);
	const { toast } = useToast();

	useEffect(() => {
		const checkUserHistory = async () => {
			const history = await checkHistory();
			if (history) {
				setLogos(history);
			} else {
				toast({
					title: "Error",
					description: "Failed to load history.",
					variant: "destructive",
				});
			}
		};

		checkUserHistory();
	}, [toast]);

	const handleDownload = (imageUrl: string) => {
		window.open(imageUrl, "_blank");
		toast({
			title: "Opening image",
			description: "The logo will open in a new tab",
		});
	};

	return (
		<div className="min-h-screen">
            <Navbar />
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<LogoCard logos={logos} handleDownload={handleDownload} />
				</div>
			</div>
		</div>
	);
}
