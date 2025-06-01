<!-- Made by watching the following tutorial: -->
<!-- https://www.youtube.com/watch?v=kMz_Ba_OF2w -->

<script lang="ts">
  type Game = 'waiting for input' | 'in progress' | 'game over'
  type Word = string

  let game: Game = 'waiting for input'
  let typedLetter = ''

  let words: Word[] = 'The quick brown fox jumps over the lazy dog'.split(' ')

  let wordIndex = 0
  let letterIndex = 0
  let correctLetters = 0

  let wordsEl: HTMLDivElement
  let letterEl: HTMLSpanElement
  let inputEl: HTMLInputElement

  function updateGameState(){}

  function handleKeydown(event: KeyboardEvent) {
    // Currently at 21:56
  }

</script>

<div class="game" data-game={game}>
  <input 
    bind:this={inputEl}
    bind:value={typedLetter}
    on:input={updateGameState}
    on:keydown={handleKeydown}
    class="input"
    type="text"
  />

  <div bind:this={wordsEl} class="words">
    {#each words as word}
      <span class="word">
        {#each word as letter}
          <span class="letter">{letter}</span>            
        {/each}
        </span>
        <span> </span> <!-- Needed to add this to get space between the words (not in the tutorial) -->
    {/each}
  </div>
</div>