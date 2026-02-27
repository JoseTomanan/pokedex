<script lang="ts">
  import { Trigger } from "./ui/dialog";
	import { TYPE_BG_COLORS, TYPE_RING_COLORS } from "@/constants";

	import { PokemonType } from "@/enums";
  import type { SpeciesShort, SpeciesDetails } from "@/types";
	import { getIdAsParam } from "@/utils";

  const { name, id, url, types }: SpeciesShort = $props();

  // svelte-ignore state_referenced_locally
  const idParam: string = getIdAsParam(id);

  const typeIcons = import.meta.glob('$lib/assets/pokemon-types-icons/*.svg', {
    eager: true,
    query: '?url',
    import: 'default',
  });

  const getTypeIcon = (t: string) => typeIcons[`/src/lib/assets/pokemon-types-icons/${t}.svg`];

  console.log(getTypeIcon("bug"));

  // svelte-ignore state_referenced_locally
  const ringColor = TYPE_RING_COLORS[types[0] as keyof typeof TYPE_RING_COLORS];

  // svelte-ignore state_referenced_locally
  const bgColor = TYPE_BG_COLORS[types[0] as keyof typeof TYPE_BG_COLORS];
</script>


<Trigger class={`card group ${ringColor} flex flex-col items-center overflow-clip transition
                  hover:ring-3 hover:bg`}>
  <div class="flex flex-row justify-between items-center gap-1 w-full">
    <h4 class="font-semibold">
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </h4>
    <h6 class="font-mono z-90 leading-none bg-card text-foreground/90">
      #{idParam}
    </h6>
  </div>
  <div class="flex flex-row justify-between items-end w-full">
    <div class="flex flex-col gap-0.5">
      {#each types as type}
        {@const thisBgColor = TYPE_BG_COLORS[type as keyof typeof TYPE_BG_COLORS]}
        {@const typeIconUrl = (() => {
                const returnableIcon = getTypeIcon(type.toLowerCase());
                if (typeof returnableIcon !== "string")
                  throw new Error(`ICON FOR TYPE '${type}' NOT FOUND`); 
                return returnableIcon; 
              })()}
        <span class={`${thisBgColor} p-1 text-foreground rounded-full w-fit opacity-80
                        group-hover:opacity-100`}>
          <img src={typeIconUrl as string}
                class="size-3"
                alt={type} />
        </span>
      {/each}
    </div>
    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idParam}.png`}
          alt={name}
          class="size-32 opacity-60 z-10 -mt-6 -mb-8 -ml-8
                  group-hover:opacity-100"/>
  </div>
</Trigger>
