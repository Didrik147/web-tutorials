<script lang="ts">
  import '../styles/app.scss'
</script>

<svelte:head>
  <title>Sveltetype</title>
</svelte:head>

<div class="layout">
  <nav>
    <h1>🔥 sveltetype</h1>
  </nav>

  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  h1 {
    font-family: 'Lecend Deca', sans-serif;
    font-size: 1.8rem;
    color: var(--fg-200);
  }

  .layout {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: center;
    padding: 2rem;
  }
</style>