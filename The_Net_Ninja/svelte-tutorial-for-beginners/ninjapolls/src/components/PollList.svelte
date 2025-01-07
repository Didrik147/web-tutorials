<script>
  import {fade, slide, scale} from 'svelte/transition';
  import {flip} from 'svelte/animate';
  import PollStore from "../stores/PollStore.js";
  import PollDetails from "./PollDetails.svelte";
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <!-- <div transition:fade> -->
    <div in:fade out:scale|local animate:flip={{duration: 500}}>
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

  @media (max-width: 576px) {
    .poll-list {
      grid-template-columns: 1fr;
    }
  }
</style>
