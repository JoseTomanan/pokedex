<script lang="ts">
  import { Root as DialogRoot } from "@/components/ui/dialog/index";

  import { onMount } from "svelte";
  import type { Resource, SpeciesDetails, SpeciesShort } from "@/types"
  
  import SearchBar from "./SearchBar.svelte";
  import SpeciesCard from "@/components/SpeciesCard.svelte";
	import SpeciesDialog from "@/components/SpeciesDialog.svelte";

  let isLoading: boolean = false;

  let speciesList: SpeciesShort[] = $state([]);
  let previousUrl: string = $state("");
  let nextUrl: string = $state("");

  onMount(() => {
    fetchItemsFromLink("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10");
  });

  async function fetchItemsFromLink(url: string) {
    isLoading = true;
    try {
      const response = await fetch(url);
      const result = await response.json();

      for (const item of result.results as Resource[]) {
        const subResponse = await fetch(item.url);
        const subResult = await subResponse.json();

        const id: number = subResult.id;
        const types: string[] = subResult.types.map((t: any) => t.type.name.toUpperCase());
        const details: SpeciesDetails = subResult as SpeciesDetails;

        speciesList.push({
          ...item, id, types, details
        } as SpeciesShort);
      }
      
      previousUrl = result.previous;
      nextUrl = result.next;
    } catch (e) {
      alert("There was an error in fetching from PokeAPI:"+e)
    } finally {
      isLoading = false;
    }
  };
</script>


<div class="p-4 space-y-4">
  <SearchBar/>
  <div class="card-grid">
    {#each speciesList as speciesItem}
      <DialogRoot>
        <SpeciesCard {...speciesItem} />
        <SpeciesDialog {...speciesItem.details} />
      </DialogRoot>
    {/each}
  </div>
  <!-- TODO: add skeleton for when loading -->
</div>
