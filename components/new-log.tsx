"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "./date-picker";
import { useLogStore } from "@/store";
import { toast } from "./ui/use-toast";
import dayjs from "dayjs";
export function NewLog() {
	const log = useLogStore((state) => state.log);
	const setLog = useLogStore((state) => state.setLog);
	const setLogs = useLogStore((state) => state.setLogs);
	const logs = useLogStore((state) => state.logs);
	const validate = () => {
		if (!log.date || !log.hour || log.hour === 0) {
			throw "Date or hour cannot be empty";
		} else if (log.hour > 24) {
			throw "Please enter a valid hour";
		}
	};
	const submitLog = () => {
		try {
			validate();
			setLogs(log, dayjs(log.date).format("DD-MM-YYYY"));
			toast({
				title: "Successfully created log",
				description: `${log.hour} hours in ${log.date.toDateString()}`,
			});
			console.log(logs);
			closeDialog();
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Fail to create Log",
				description: error as string,
			});
		}
	};
	const closeDialog = () => {
		document.getElementById("close-btn")?.click();
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="border-dashed border-neutral-400">
					Add Log
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Log</DialogTitle>
					<DialogDescription>
						{
							" Remember, time is your moset valuable asset - invest it wisely with Our Time Log App."
						}
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="date" className="text-right">
							Date
						</Label>
						<DatePicker />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="hour" className="text-right">
							Hour
						</Label>
						<Input
							id="hour"
							type="number"
							className="col-span-3"
							value={log.hour}
							onChange={(e) =>
								setLog({
									...log,
									hour: parseInt(e.target.value),
								})
							}
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="note" className="text-right">
							Note
						</Label>
						<Input
							id="note"
							defaultValue="note of log"
							className="col-span-3"
							value={log.note}
							onChange={(e) =>
								setLog({
									...log,
									note: e.target.value,
								})
							}
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit" onClick={submitLog}>
						Save
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
