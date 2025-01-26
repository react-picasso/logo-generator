"use client";

import Navigation from "@/components/Navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Faq from "@/components/landing/faq";

export default function Home() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
	return (
		<>
            <div className="overflow-hidden">
                <div className="bg-red-400">
                    <Navbar />
                </div>
                <Hero />
                <main className="max-w-6xl mx-auto">
                    <div className="px-4">
                        <Features />
                        <Faq />
                    </div>
                </main>
                <Footer />
            </div>
        </>
	);
}
