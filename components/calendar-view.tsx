"use client";
import React from "react";
import dayjs from "dayjs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { cn } from "@/lib/utils";
import { useLogStore } from "@/store";
export default function CalendarView() {
	const logs = useLogStore((state) => state.logs);

	function getDateInMonth(year = dayjs().year(), month = dayjs().month()) {
		const startDate = dayjs().year(year).month(month).date(1);
		const endDate = startDate.endOf("month");

		const datesArray = [];
		for (let i = startDate.date(); i < endDate.date(); i++) {
			datesArray.push(startDate.date(i).format("DD-MM-YYYY"));
		}
		return datesArray;
	}
	
	const getColor = (value: number) => {
		if (value === 0) return "bg-zinc-100";
		else if (value < 3) return "bg-emerald-200";
		else if (value < 5) return "bg-emerald-300";
		else if (value < 8) return "bg-emerald-500";
		else if (value < 10) return "bg-emerald-600";
		else return "bg-emerald-700";
	};
	return (
		<div className="border flex gap-2 flex-wrap justify-center border-dashed p-10 rounded-md">
			{getDateInMonth().map((date, index) => {
				const log = logs[date];

				return (
					<HoverCard key={index}>
						<HoverCardTrigger>
							<div
								className={cn(
									"w-5 h-5 bg-gray-200 rounded-sm cursor-pointer",
									getColor(log?.hour || 0)
								)}
							></div>
						</HoverCardTrigger>
						<HoverCardContent>
							{log?.hour} hours on {date}
						</HoverCardContent>
					</HoverCard>
				);
			})}
		</div>
	);
}
