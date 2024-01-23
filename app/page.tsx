import CalendarView from "@/components/calendar-view";
import Logs from "@/components/logs";
import Navbar from "@/components/navbar";
import { NewLog } from "@/components/new-log";

export default function Home() {
	return (
		<main className="p-5 space-y-10">
			<Navbar />
			<NewLog />
			<CalendarView />
			<Logs />
		</main>
	);
}
