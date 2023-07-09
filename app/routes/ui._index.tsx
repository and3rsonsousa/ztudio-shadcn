import { Loader, Mail, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
enum themeValues {
	LIGHT = "light",
	DARK = "dark",
}
export default function UIPage() {
	const [theme, setTheme] = useState<themeValues>(themeValues.LIGHT);
	return (
		<div className={theme}>
			<div className="bg-background text-foreground min-h-screen">
				{/* Header */}
				<div className="p-8 flex justify-between items-center ">
					<h3 className="text-2xl font-bold tracking-tighter">ui</h3>
					<Button
						variant={"secondary"}
						onClick={() =>
							setTheme(
								theme === themeValues.LIGHT
									? themeValues.DARK
									: themeValues.LIGHT
							)
						}
					>
						{theme === themeValues.LIGHT ? <Moon /> : <Sun />}
					</Button>
				</div>
				{/* Colors */}
				<div className=" grid gap-2 p-8 md:grid-cols-2 lg:grid-cols-4">
					<div className="p-2 bg-background text-foreground">
						bg-background
					</div>
					<div className="p-2 bg-foreground text-background">
						bg-foreground
					</div>
					<div className="p-2 bg-muted text-muted-foreground">
						bg-muted
					</div>
					<div className="p-2 bg-muted-foreground">
						bg-muted-foreground
					</div>
					<div className="p-2 bg-popover text-popover-foreground">
						bg-popover
					</div>
					<div className="p-2 bg-popover-foreground text-popover">
						bg-popover-foreground
					</div>
					<div className="p-2 bg-card text-card-foreground">
						bg-card
					</div>
					<div className="p-2 bg-card-foreground text-card">
						bg-card-foreground
					</div>
					<div className="p-2 bg-primary text-primary-foreground">
						bg-primary
					</div>
					<div className="p-2 bg-primary-foreground text-prima">
						bg-primary-foreground
					</div>
					<div className="p-2 bg-secondary text-secondary-foreground">
						bg-secondary
					</div>
					<div className="p-2 bg-secondary-foreground text-secondary">
						bg-secondary-foreground
					</div>
					<div className="p-2 bg-accent text-accent-foreground">
						bg-accent
					</div>
					<div className="p-2 bg-accent-foreground text-accent">
						bg-accent-foreground
					</div>
					<div className="p-2 bg-destructive text-destructive-foreground">
						bg-destructive
					</div>
					<div className="p-2 bg-destructive-foreground">
						bg-destructive-foreground
					</div>
					<div className="p-2 bg-border text-foreground">
						bg-border
					</div>
					<div className="p-2 bg-input text-foreground">bg-input</div>
				</div>
				{/* Radius */}
				<div className="flex justify-between p-8">
					<div className="rounded-sm px-2 py-8 border">
						rounded-sm
					</div>
					<div className="rounded-md px-2 py-8 border">
						rounded-md
					</div>
					<div className="rounded-lg px-2 py-8 border">
						rounded-lg
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-between p-8">
					<Button variant={"default"}>default</Button>
					<Button variant={"secondary"}>secondary</Button>
					<Button variant={"outline"}>outline</Button>
					<Button variant={"ghost"}>ghost</Button>
					<Button variant={"link"}>link</Button>
					<Button variant={"destructive"}>destructive</Button>
				</div>
				<div className="flex justify-between p-8">
					<Button variant={"secondary"} size={"sm"}>
						sm
					</Button>
					<Button variant={"default"} size={"default"}>
						default
					</Button>
					<Button variant={"outline"} size={"lg"}>
						lg
					</Button>
					<Button>
						with icon <Mail className="ml-2 h-4 w-4" />
					</Button>
					<Button disabled>
						<Loader className="w-4 h-4 animate-spin mr-2" />{" "}
						Logando...
					</Button>
					<Button variant={"destructive"} size={"icon"}>
						<X />
					</Button>
				</div>
			</div>
		</div>
	);
}
