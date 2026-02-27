<script lang="ts">
  import MdiSearch from "~icons/mdi/search";
  import { Input } from "$lib/components/ui/input/index";
	import { setContext } from "svelte";
	import * as Select from "@/components/ui/select";
  
  const SORT_CHOICES = ["id", "name"];
  const FILTER_CHOICES = ["id", "name"];

  let searchFilter = "name" // TODO: make this getContext()
  let searchQuery: string = $state("");

  let sortValue: string | undefined = $state();
  let filterValue: string | undefined = $state();

  const sortTriggerContent = $derived(
          sortValue
            ? (sortValue == "id" ? "Sort by ID No." : "Sort by name")
            : "Sort by..."
        );
  const filterTriggerContent = $derived(
          filterValue
            ? (filterValue == "id" ? "Filter by ID No." : "Filter by name")
            : "Filter by..."
        );

  // svelte-ignore state_referenced_locally
  setContext("searchQueryContext", searchQuery);
  // svelte-ignore state_referenced_locally
  setContext("sortValueContext", sortValue);
  // svelte-ignore state_referenced_locally
  setContext("effectValueContext", filterValue);


</script>


<div class="flex flex-col justify-center items-center gap-1
              md:flex-row">
  <div class="relative flex flex-row items-center justify-center w-full">
    <Input id="searchQuery"
            type="text"
            value={searchQuery}
            class="focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            // TODO: add filter name to placeholder
            placeholder={`Search by ${searchFilter}...`} />
    <MdiSearch class="grow size-4 m-auto text-input-foreground 
                        absolute top-1/2 -translate-1/2 right-0 pointer-events-none" />
  </div>
  <div class="flex flex-row justify-center items-center w-full gap-x-1">
    <Select.Root type="single"
                  name="sort"
                  bind:value={sortValue}>
      <Select.Trigger class="w-1/2">
        {sortTriggerContent}
      </Select.Trigger>
      <Select.Content>
        {#each SORT_CHOICES as value}
          <Select.Item {value}>
            {value == "id" ? "ID No." : "Name"}
          </Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>
    <Select.Root type="single"
                  name="filter"
                  bind:value={filterValue}>
      <Select.Trigger class="w-1/2">
        {filterTriggerContent}
      </Select.Trigger>
      <Select.Content>
        {#each FILTER_CHOICES as value}
          <Select.Item {value}>
            {value == "id" ? "ID No." : "Name"}
          </Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>
  </div>
</div>