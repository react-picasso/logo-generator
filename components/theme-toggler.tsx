"use client";

import { useTheme } from "next-themes";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";

export function ToggleTheme() {
	const { setTheme, theme } = useTheme();
	return (
		<>
			<div
				className={`flex cursor-pointer items-center gap-2 rounded-lg text-center transition-all duration-300`}
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			>
                <IconSunFilled className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <IconMoonFilled className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
		</>
	);
}
