import React from "react";
import AuthComponent from "./_components/auth-component";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
export default async function page() {
	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();

	if (data.session) {
		return redirect("/");
	}
	return <AuthComponent />;
}
