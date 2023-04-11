'use client';
export default function Error({ error, reset }) {
	return (
		<div>
			<h1>wrong: {error.message}</h1>
			<button onClick={() => reset()}>Reset</button>
		</div>
	);
}
