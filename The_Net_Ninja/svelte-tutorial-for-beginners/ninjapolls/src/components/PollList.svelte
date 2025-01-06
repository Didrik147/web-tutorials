<script>
  //import { onDestroy, onMount } from 'svelte';
  import PollStore from '../stores/PollStore.js'
  import PollDetails from "./PollDetails.svelte";
  
  //export let polls = [];

  /* const unsub = PollStore.subscribe(data => {
    polls = data;
  }); */

  /* onMount(() => {
    // Maybe get data from a db
    console.log('Component mounted');
  }); */

  /* onDestroy(() => {
    // Unsub from store
    console.log('Component destroyed');
    unsub();
  }); */

</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>