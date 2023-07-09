import { Theme, useTheme } from "~/lib/theme-provider";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const [theme, setTheme] = useTheme();

	const toogleTheme = () => {
		setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
	};

	return (
		<Button variant={"ghost"} onClick={toogleTheme} size={"icon"}>
			{theme === Theme.LIGHT ? (
				<Moon className="h-4 w-4" />
			) : (
				<Sun className="h-4 w-4" />
			)}
		</Button>
	);
}
