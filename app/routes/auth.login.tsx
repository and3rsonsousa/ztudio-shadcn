import type { V2_MetaFunction } from "@remix-run/react/dist/routeModules";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Form as RemixForm } from "@remix-run/react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { User } from "lucide-react";

export const meta: V2_MetaFunction = () => [{ title: "Login - ZTUDIO" }];

export default function LoginPage() {
	const form = useForm();
	return (
		<div className="min-h-screen grid place-items-center">
			<div className="max-w-sm w-full p-8 flex flex-col gap-8">
				<div>
					<img src="/logo.png" alt="ZTUDIO" className="h-6" />
				</div>

				<Form {...form}>
					<RemixForm method="post">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<Label htmlFor={field.name}>E-mail</Label>
									<FormControl>
										<Input
											placeholder="seu@email.aqui"
											id={field.name}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<Label htmlFor={field.name}>Senha</Label>
									<FormControl>
										<Input
											placeholder="seu@email.aqui"
											id={field.name}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="mt-4 text-right">
							<Button type="submit">
								Login
								<User className="h-4 ml2" />
							</Button>
						</div>
					</RemixForm>
				</Form>
			</div>
		</div>
	);
}
