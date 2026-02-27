export interface Resource {
  name: string;
  url: string;
}

export interface SpeciesShort {
  id: number;
  name: string;
  url: string;
  types: string[];
  details: SpeciesDetails;
}

export interface SpeciesDetails {
  height: number;
  weight: number;
  stats: {base_stat: number, effort: number, stat: Resource[]}[]
  // TODO: complete
}