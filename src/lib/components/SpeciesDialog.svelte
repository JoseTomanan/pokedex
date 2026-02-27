<script lang="ts">
	import type { SpeciesDetails } from "@/types";
  import * as Dialog from "./ui/dialog";
	import { nameCase } from "@/utils";

  const details: SpeciesDetails = $props();

  async function fetchNewDetails() {
    // TODO: fetch when Previous or Next is clicked
  }
</script>


<Dialog.Content class="border-none">
  <Dialog.Header>
    <Dialog.Title>{nameCase(details.name)}</Dialog.Title>
    <Dialog.Close></Dialog.Close>
  </Dialog.Header>
  <div>
    <h6>Height: {details.height} cm</h6>
    <h6>Weight: {details.weight} kg</h6>
    <h6>Stats: {details.stats}</h6>
    <h6>Weak against: </h6>
  </div>
  <!-- TODO: add weaknesses -->
  <!-- TODO: add more details. I don't really know what details are necessary and not necessary tbh -->
  <div class="flex flex-row justify-between text-xs">
    <button>Previous</button>
    <button>Next</button>
  </div>
</Dialog.Content>


<style>
  button {
    background-color: var(--accent);
    color: var(--accent-foreground);
    border-radius: calc(var(--radius) - 6px);
    padding-inline: var(--spacing);
  }
</style>