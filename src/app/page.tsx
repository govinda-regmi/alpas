import { DataFetcher } from "@/components/DataDisplay";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<DataFetcher />
		</main>
	);
}
