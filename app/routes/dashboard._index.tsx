import type { V2_MetaFunction } from "@remix-run/react/dist/routeModules";

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

export default function DashboardIndex() {
	return <div>Oi</div>;
}
