import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { User } from "lucide-react";
import ThemeToggle from "~/components/structure/theme-toggle";
import { Button } from "~/components/ui/button";

export const meta: V2_MetaFunction = () => {
	return [
		{
			title: "ᴢᴛᴜᴅɪᴏ - ᴘʟaɴ ꜰazᴛ, ᴡᴏʀᴋ ʟezz",
		},
		{
			name: "description",
			content:
				"Sistema de gerenciamento de ações criado e mantido pela aɢêɴᴄɪa caɴɪveᴛe",
		},
	];
};

export default function Index() {
	return (
		<div className="selection:bg-primary selection:text-primary-foreground">
			<div className="grid min-h-screen place-content-center ">
				<div className="w-96 text-center">
					<div>
						<img
							src="/logo.png"
							alt="ZTUDIO"
							className="mx-auto mb-8 w-36"
						/>
					</div>

					<p className="text-center">
						Sistema de gestão de ações criado
						<br /> e mantido pela{" "}
						<a
							href="https://agenciacanivete.com.br"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							aɢêɴᴄɪa ᴄaɴɪᴠeᴛe
						</a>
						.
					</p>
					<div className="mt-8">
						<Button asChild variant={"default"}>
							<a href="/dashboard">
								<span>Entrar</span>
								<User className="ml-2 w-4 h-4" />
							</a>
						</Button>
					</div>
				</div>
			</div>
			<div className="fixed right-2 top-2">
				<ThemeToggle />
			</div>
		</div>
	);
}
