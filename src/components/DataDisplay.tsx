"use client";

import { useEffect, useState } from "react";

export const DataFetcher = () => {
	const [respData, setRespData] = useState<any>();
	const [error, setError] = useState<any>();

	useEffect(() => {
		const data = async () => {
			await fetch("https://api.wireten.com/v1/data")
				.then((respData) => setRespData(respData))
				.catch((err) => setError(err));
		};
		data();
	}, []);

	console.log(respData, "resp data", error, "error data");

	return (
		<>
			<div>
				<div>hello</div>
			</div>
		</>
	);
};
