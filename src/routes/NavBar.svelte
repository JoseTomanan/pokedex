<script lang="ts">
  import pokeball from '$lib/assets/pokeball.svg';
</script>

<nav class="flex flex-row justify-between items-center">
  <a class="group flex flex-row gap-2 justify-center items-center text-left cursor-pointer"
        href="#top">
    <img src={pokeball}
          alt="Logo"
          class="size-8 slow-spin"/>
    <span class="-my-0.5 hidden sm:flex sm:flex-col *:leading-none">
      <h3 class="-mb-0.25 font-semibold group-hover:text-primary">
        Oak's Assistant
      </h3>
      <h5 class="-mt-0.25 group-hover:opacity-100">
        Made for Professor Oak
      </h5>
    </span>
  </a>
  <div class="space-x-4 tracking-tight header-links">
    <a href="https://pokeapi.co/docs/v2">PokéAPI</a>
    <a href="https://github.com/JoseTomanan/svelte-pokedex">Repository</a>
  </div>
</nav>