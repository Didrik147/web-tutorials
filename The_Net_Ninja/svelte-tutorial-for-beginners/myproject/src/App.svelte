<script>
	// Based on the following YouTube playlist by Net Ninja:
	// https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO

	let firstName = "Didrik";
	let lastName = "Roest";
	let beltColour = "black";

	// Reactive values
	$: fullName = `${firstName} ${lastName}`;
	//$: console.log(beltColour);
	$: {
		console.log(beltColour);
		console.log(fullName);
	}

	const handleClick = () => {
		beltColour = "yellow";
	};

	const handleInput = (e) => {
		beltColour = e.target.value;
	};
</script>

<main>
	<p>{fullName} - {beltColour} belt</p>
	<!-- Two-way binding -->
	 <input type="text" bind:value={firstName}>
	 <input type="text" bind:value={lastName}>
	 <input type="text" bind:value={beltColour}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
