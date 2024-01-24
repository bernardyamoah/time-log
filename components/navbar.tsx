"use client";
import React from "react";
import { Button } from "./ui/button";
import { UserAvatar } from "./user-avatar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
	const supabase = createClientComponentClient();
	const router = useRouter();
	const pathname = usePathname();
	const signOut = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};
	const isAuthpage = pathname === "/auth";
	return (
		<div className="flex items-center justify-between ">
			<h1 className="font-bold text-2xl">Time</h1>
			<div className="flex item-center gap-2">
				<UserAvatar />
				{!isAuthpage && <Button onClick={signOut}>Logout</Button>}
			</div>
		</div>
	);
}
