"use client";
import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useLogStore } from "@/store";
export default function Logs() {
	const logs = useLogStore((state) => state.logs);
	return (
		<Table>
			<TableCaption>List of Logs</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-1/3">Date</TableHead>
					<TableHead className="w-1/3">Hours</TableHead>
					<TableHead className="w-1/3">Note</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{Object.keys(logs).map((key) => {
					const log = logs[key];
					return (
						<TableRow key={key}>
							<TableCell className="font-medium">
								{log.date.toDateString()}
							</TableCell>
							<TableCell>{log.hour}</TableCell>
							<TableCell>{log.note}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
