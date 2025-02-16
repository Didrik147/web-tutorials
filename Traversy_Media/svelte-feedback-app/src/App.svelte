<!-- Made by following a tutorial by Traversy Media -->
 
<script>
	import FeedbackList from "./components/FeedbackList.svelte";

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat delectus dolores quo quae est quasi magnam, nihil numquam aspernatur.',
		},
		{
			id: 2,
			rating: 9,
			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, distinctio maxime.',
		},
		{
			id: 3,
			rating: 7,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa minus nisi totam. Reprehenderit mollitia dolorem quas in laborum quis hic dicta quam iste. Veniam?',
		},
	] 

	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}
</script>

<main class="container">
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>


<style>

</style>