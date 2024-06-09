"use client ";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { User } from "./user-avatar";

export default function UserAvatar({ user }: { user: User }) {
	return (
		<Avatar>
			<AvatarImage src={user?.avatar_url} alt={user?.full_name} />
			<AvatarFallback>{user?.full_name}</AvatarFallback>
		</Avatar>
	);
}
