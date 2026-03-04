<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/pokeball.svg';
  import NavBar from './NavBar.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Oak's Assistant</title>
</svelte:head>

<span id="top" class="-mt-4 -z-100"></span>
<div class="flex justify-center bg-fixed min-h-[91vh]">
  <NavBar/>
  <div class="pt-13 container">
    {@render children()}
  </div>
</div>
<footer class="flex justify-center py-4">
  <p class="text-xs text-muted-foreground/60">Made with love, by Jose &hearts;</p>
</footer>
