"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import React from "react";

export default function page() {
	const supabase = createClientComponentClient();

	const handleLogin = () => {
		supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${location.origin}/auth/callback`,
			},
		});
	};
	return (
		<div className="p-5">
			<Navbar />
			<div className="h-[80vh] flex items-center justify-center">
				<div className="text-center space-y-5">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
						distinctio, incidunt est id ipsa natus repellat quas vel nihil
						consequatur dolor praesentium blanditiis sequi temporibus. Modi quas
						itaque totam perferendis non omnis repudiandae maxime ut aliquid,
						quis ipsam soluta, pariatur, reprehenderit velit eius?
					</p>
					<Button onClick={handleLogin}>Login with Github</Button>
				</div>
			</div>
		</div>
	);
}
