import { Link, Outlet, useMatches, useParams } from "@remix-run/react";
import { Briefcase, PlusCircle, Search, User } from "lucide-react";
import type { AccountModel, ContextType, PersonModel } from "~/lib/models";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Layout({ context }: { context: ContextType }) {
	const matches = useMatches();
	const { slug } = useParams();
	const person: PersonModel = matches[1].data.person;

	console.log({ slug, person });

	const accounts: AccountModel[] = matches[1].data.accounts;
	return (
		<div className="app pt-14">
			<header className="px-4 h-14 flex items-center justify-between border-b cnvt-translucent fixed top-0 w-full">
				<div>
					<img src="logo.png" alt="ZTUDIO" className="h-4" />
				</div>
				<nav>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button size={"icon"} variant={"ghost"}>
								<Briefcase className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="cnvt-translucent">
							{accounts.map((account) => (
								<DropdownMenuItem
									key={account.id}
									asChild
									className="cnvt-item"
								>
									<Link to={`/dashboard/${account.slug}`}>
										{account.name}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<Button size={"icon"} variant={"ghost"}>
						<Search className="h-4 w-4" />
					</Button>
					<Button size={"icon"} variant={"ghost"}>
						<User className="h-4 w-4" />
					</Button>
					<Button size={"icon"} variant={"ghost"}>
						<PlusCircle className="h-4 w-4" />
					</Button>
				</nav>
			</header>

			<Outlet />
		</div>
	);
}
