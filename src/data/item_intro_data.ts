import icon_shinobi_boots from "../assets/items/BTNBootsGeninGradient.png"
import icon_shinobi_headband from "../assets/items/BTNHatHeadbandGradient.png"
import icon_shinobi_west from "../assets/items/BTNArmorJouninGradient.png"
import icon_kunai from "../assets/items/BTNWeaponKunaiGradient.png"
import icon_demon_wind_shuriken from "../assets/items/BTNWeaponDemonWindShurikenGradient.png"
import icon_senbon from "../assets/items/BTNWeaponSenbonGradient.png"
import icon_bingobook from "../assets/items/BTNBingoBookGradient.png"
import icon_necklace_grey from "../assets/items/BTNNecklaceGreyGradient.png"
import icon_sannin_headband from "../assets/items/BTNHatSanninGradient.png"
import icon_chakra_pill from "../assets/items/BTNNCOW_Icon_FoodPillBlueGradient.png"
import icon_health_pill from "../assets/items/BTNNCOW_Icon_FoodPillGreenGradient.png"
import icon_combat_pill from "../assets/items/BTNNCOW_Icon_FoodPillRedGradient.png"
import icon_explosive_tag from "../assets/items/BTNUtilExplosiveTagGradient.png"
import icon_necklace_blue from "../assets/items/BTNNecklaceBlueGradient.png"
import icon_necklace_green from "../assets/items/BTNNecklaceGreenGradient.png"
import icon_necklace_red from "../assets/items/BTNNecklaceRedGradient.png"
import icon_necklace_six_paths from "../assets/items/BTNNecklaceSixPathsGradient.png"
import icon_anbu_weapon from "../assets/items/BTNAnbuSwordGradient.png"
import icon_anbu_set from "../assets/items/BTNSetAnbuGradient.png"
import icon_kunai_raijin from "../assets/items/BTNKunaiFlyingRajinGradient.png"
import icon_sannin_set from "../assets/items/BTNSetSanninGradient.png"
import icon_kazekage_set from "../assets/items/BTNSetIntGradient.png"
import icon_raikage_set from "../assets/items/BTNSetAgiGradient.png"
import icon_hokage_set from "../assets/items/BTNSetStrGradient.png"
import icon_scientific_tool from "../assets/items/BTNScientificToolEmpyGradient.png"

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
  { id: "kunai", icon: icon_kunai, row: 70, category: "general",  },
  { id: "senbon", icon: icon_senbon, row: 67, category: "general" },
  { id: "shuriken", icon: icon_demon_wind_shuriken, row: 64, category: "general" },
  { id: "shinobi_west", icon: icon_shinobi_west, row: 52, category: "general" },
  { id: "shinobi_headband", icon: icon_shinobi_headband, row: 49, category: "general" },
  { id: "shinobi_boots", icon: icon_shinobi_boots, row: 46, category: "general" },
  { id: "bingobook", icon: icon_bingobook, row: 43, category: "general" },
  { id: "necklace_grey", icon: icon_necklace_grey, row: 40, category: "general", recipeIds: ["necklace_blue", "necklace_green", "necklace_red"] },
  { id: "sannin_headband", icon: icon_sannin_headband, row: 58, category: "general" },

  { id: "chakra-pill", icon: icon_chakra_pill, row: 0, category: "consumable" },
  { id: "explosive-tag", icon: icon_explosive_tag, row: 61, category: "consumable" },

  { id: "scientific_tool", icon: icon_scientific_tool, row: 55, category: "scientific_nina_tool" },

  { id: "necklace_blue", icon: icon_necklace_blue, row: 32, category: "recipes" },
  { id: "necklace_green", icon: icon_necklace_green, row: 29, category: "recipes" },
  { id: "necklace_red", icon: icon_necklace_red, row: 26, category: "recipes" },
  { id: "necklace_six_paths", icon: icon_necklace_six_paths, row: 21, category: "recipes" },
  { id: "kunai_rajin", icon: icon_kunai_raijin, row: 24, category: "recipes" },
  { id: "anbu_weapon", icon: icon_anbu_weapon, row: 18, category: "recipes" },
  { id: "anbu_set", icon: icon_anbu_set, row: 15, category: "recipes" },
  { id: "sannin_set", icon: icon_sannin_set, row: 12, category: "recipes" },
  { id: "kazekage_set", icon: icon_kazekage_set, row: 9, category: "recipes" },
  { id: "raikage_set", icon: icon_raikage_set, row: 6, category: "recipes" },
  { id: "hokage_set", icon: icon_hokage_set, row: 3, category: "recipes" },
];

export const ITEM_RECIPES: Record<string, ItemRecipe> = {
  "necklace_blue": {
    id: "necklace_blue",
    resultItemId: "necklace_blue",
    componentItemIds: ["necklace_grey","necklace_green","necklace_blue"],
  },
  "necklace_green": {
    id: "necklace_green",
    resultItemId: "necklace_green",
    componentItemIds: ["necklace_grey"],
  },
  "necklace_red": {
    id: "necklace_red",
    resultItemId: "necklace_red",
    componentItemIds: ["necklace_grey"],
  },
  "necklace_six_paths": {
    id: "necklace_six_paths",
    resultItemId: "necklace_six_paths",
    componentItemIds: ["necklace_red", "necklace_green", "necklace_blue"],
  },
};
