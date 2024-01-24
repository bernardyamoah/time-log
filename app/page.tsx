import CalendarView from "@/components/calendar-view";
import Logs from "@/components/logs";
import Navbar from "@/components/navbar";
import { NewLog } from "@/components/new-log";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();
	console.log("🚀 ~ Home ~  data :", data);
	if (!data.session) {
		return redirect("/auth");
	}
	return (
		<main className="p-5 space-y-10">
			<Navbar />
			<NewLog />
			<CalendarView />
			<Logs />
		</main>
	);
}
