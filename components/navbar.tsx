import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
	return (
		<div className="flex items-center justify-between ">
			<h1 className="font-bold text-2xl">Time</h1>
			<Button>Logout</Button>
		</div>
	);
}
