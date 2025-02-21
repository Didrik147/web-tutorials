<script>
  export let y;
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
    (y > 0
      ? " py-4 bg-slate-950 border-violet-950"
      : " py-6 bg-transparent border-transparent")}
>
  <h1 class="font-medium">
    <b class="font-bold poppins">Didrik</b> <span class="">Roest</span>
  </h1>
  <div class="sm:flex items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a href={tab.link}>
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
</header>
