import Icon_Naruto from "../assets/characters/NCOW_IMG_NarutoBase.png";
import Icon_Sasuke from "../assets/characters/NCOW_IMG_SasukeHebi.png";
import Icon_Itachi from "../assets/characters/NCOW_IMG_Itachi.png";
import Icon_Obito from "../assets/characters/NCOW_IMG_MaskedMan.png";

export type ItemCategory = "general" | "consumable" | "scientific_nina_tool" | "recipes";

export type ItemDefinition = {
  id: string;
  icon: string;
  row: number;
  category: ItemCategory;
  recipeIds?: string[];
};

export type ItemRecipe = {
  id: string;
  resultItemId: string;
  componentItemIds: string[];
};

export const ITEM_TABS: Array<{ id: ItemCategory; label: string }> = [
  { id: "general", label: "General" },
  { id: "consumable", label: "Consumables" },
  { id: "scientific_nina_tool", label: "Scientific Ninja Tools" },
  { id: "recipes", label: "Recipes" },
];

export const ITEM_INTRO_ITEMS: ItemDefinition[] = [
  { id: "kunai", icon: Icon_Naruto, row: 70, category: "general", recipeIds: ["recipe-shadow-edge"] },
  { id: "forged-seal-scroll", icon: Icon_Sasuke, row: 14, category: "general", recipeIds: ["recipe-chakra-blade"] },

  { id: "chakra-pill", icon: Icon_Sasuke, row: 10, category: "consumable" },
  { id: "explosive-tag", icon: Icon_Itachi, row: 11, category: "consumable" },

  { id: "chakra-blade", icon: Icon_Obito, row: 12, category: "scientific_nina_tool", recipeIds: ["recipe-chakra-blade"] },
  { id: "chakra-core", icon: Icon_Naruto, row: 13, category: "scientific_nina_tool" },
  
  { id: "shadow-edge", icon: Icon_Itachi, row: 15, category: "recipes" },
];

export const ITEM_RECIPES: Record<string, ItemRecipe> = {
  "recipe-shadow-edge": {
    id: "recipe-shadow-edge",
    resultItemId: "shadow-edge",
    componentItemIds: ["kunai", "chakra-core", "forged-seal-scroll"],
  },
  "recipe-chakra-blade": {
    id: "recipe-chakra-blade",
    resultItemId: "chakra-blade",
    componentItemIds: ["kunai", "chakra-core"],
  },
};
