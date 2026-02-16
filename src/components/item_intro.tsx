import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "../styles/item_intro.css";
import { ITEM_INTRO_ITEMS, ITEM_RECIPES, ITEM_TABS, type ItemCategory } from "../data/item_intro_data";

const itemsCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR6Av0Gz_s6FpWh-e0UQNPUd2l_ILtYiJdOHicyWxtQdaodT0n_pVEsq4ejRv7eduus2Vq39MqF8p4i/pubhtml?gid=195529642&single=true";

type FetchedItemData = {
  id: string;
  name: string;
  stats: string;
  description: string;
  cost: string;
  type: string;
};

function parseCsvRows(input: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = "";
  let inQuotes = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];

    if (inQuotes) {
      if (char === '"') {
        if (input[index + 1] === '"') {
          currentCell += '"';
          index += 1;
        } else {
          inQuotes = false;
        }
      } else {
        currentCell += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      currentRow.push(currentCell);
      currentCell = "";
      continue;
    }

    if (char === "\n") {
      currentRow.push(currentCell);
      rows.push(currentRow);
      currentRow = [];
      currentCell = "";
      continue;
    }

    if (char === "\r") {
      continue;
    }

    currentCell += char;
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell);
    rows.push(currentRow);
  }

  return rows;
}

function getDescriptionParagraphs(description: string | undefined): string[] {
  if (!description) {
    return [];
  }

  return description
    .split(/\r?\n\s*\r?\n/g)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);
}

function buildFetchedItemDataById(rows: string[][]): Record<string, FetchedItemData> {
  const data: Record<string, FetchedItemData> = {};

  for (const item of ITEM_INTRO_ITEMS) {
    const rowCells = rows[item.row - 1] ?? [];
    // Fixed Google Sheet columns: C (name), D (stats), E (description), G (cost), H (type)
    data[item.id] = {
      id: item.id,
      name: (rowCells[2] ?? "").trim(),
      stats: (rowCells[3] ?? "").trim(),
      description: (rowCells[4] ?? "").trim(),
      cost: (rowCells[6] ?? "").trim(),
      type: (rowCells[7] ?? "").trim(),
    };
  }

  return data;
}

export default function ItemIntro() {
  const [activeCategory, setActiveCategory] = useState<ItemCategory>("general");
  const [selectedItemId, setSelectedItemId] = useState<string>(ITEM_INTRO_ITEMS[0]?.id ?? "");
  const [fetchedItemDataById, setFetchedItemDataById] = useState<Record<string, FetchedItemData>>({});
  const [isItemDataLoading, setIsItemDataLoading] = useState(false);

  const filteredItems = useMemo(() => ITEM_INTRO_ITEMS.filter((item) => item.category === activeCategory), [activeCategory]);

  const selectedItem = filteredItems.find((item) => item.id === selectedItemId) ?? filteredItems[0] ?? ITEM_INTRO_ITEMS.find((item) => item.id === selectedItemId) ?? ITEM_INTRO_ITEMS[0] ?? null;

  const selectedFetchedItem = selectedItem ? (fetchedItemDataById[selectedItem.id] ?? null) : null;
  const selectedDescriptionParagraphs = getDescriptionParagraphs(selectedFetchedItem?.description);
  const selectedItemRecipes = selectedItem?.category === "general" ? (selectedItem?.recipeIds?.map((recipeId) => ITEM_RECIPES[recipeId]).filter((recipe) => Boolean(recipe)) ?? []) : [];

  useEffect(() => {
    setSelectedItemId(filteredItems[0]?.id ?? "");
  }, [activeCategory, filteredItems]);

  useEffect(() => {
    let cancelled = false;

    async function fetchItemData() {
      if (!itemsCsvUrl.includes("output=csv")) {
        setFetchedItemDataById({});
        return;
      }

      setIsItemDataLoading(true);

      try {
        const response = await fetch(itemsCsvUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch item sheet data: ${response.status}`);
        }

        const csv = await response.text();
        const rows = parseCsvRows(csv);
        if (!cancelled) {
          setFetchedItemDataById(buildFetchedItemDataById(rows));
          setIsItemDataLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setFetchedItemDataById({});
          setIsItemDataLoading(false);
        }
      }
    }

    fetchItemData();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div className="item_intro container pseudo">
        <div className="item_intro_top">
          <h2 className="item_name">{isItemDataLoading ? "Loading item..." : selectedFetchedItem?.name || "Item Name"}</h2>
          <h3 className="item_type">{isItemDataLoading ? "Loading..." : selectedFetchedItem?.type || "Item Type"}</h3>
        </div>

        <div className="item_icon_wrap">{selectedItem ? <img src={selectedItem.icon} alt={`${selectedFetchedItem?.name || "Item"} icon`} className="item_icon" /> : null}</div>

        <div className="item_description">
          {isItemDataLoading ? (
            <p>Loading item description...</p>
          ) : selectedDescriptionParagraphs.length > 0 ? (
            <>
              {selectedDescriptionParagraphs.map((paragraph, index) => (
                <p key={`${selectedItem?.id ?? "item"}-desc-${index}`}>{paragraph}</p>
              ))}
            </>
          ) : (
            <p>Select an item to view its description.</p>
          )}
        </div>

        <div className="item_stats">
          <p>
            <span>Stats:</span> {selectedFetchedItem?.stats || "-"}
          </p>
          <p>
            <span>Cost:</span> {selectedFetchedItem?.cost || "-"}
          </p>
        </div>

        <div className="item_recipes">
          {selectedItemRecipes.length > 0 ? (
            <>
              <h4>Available Recipes</h4>
              <div className="item_recipe_list">
                {selectedItemRecipes.map((recipe) => {
                  const resultItem = ITEM_INTRO_ITEMS.find((item) => item.id === recipe.resultItemId) ?? null;
                  const componentItems = recipe.componentItemIds
                    .slice(0, 3)
                    .map((id) => ITEM_INTRO_ITEMS.find((item) => item.id === id))
                    .filter((item) => Boolean(item));

                  return (
                    <div key={recipe.id} className="item_recipe_card pseudo">
                      <p className="recipe_result">{fetchedItemDataById[recipe.resultItemId]?.name || resultItem?.id || "Recipe Result"}</p>
                      <div className="recipe_components">
                        {componentItems.map((component) => (
                          <div key={`${recipe.id}-${component?.id}`} className="recipe_component">
                            {component ? <img src={component.icon} alt={`${component.id} icon`} /> : null}
                            <span>{fetchedItemDataById[component?.id ?? ""]?.name || component?.id || "Component"}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div className="item_list pseudo">
        <div className="tabs">
          <Swiper slidesPerView={2.5} spaceBetween={10} breakpoints={{ 769: { slidesPerView: 4, spaceBetween: 12 } }}>
            {ITEM_TABS.map((tab) => (
              <SwiperSlide key={tab.id}>
                <button className={`tab_button pseudo ${activeCategory === tab.id ? "is-active" : ""}`} onClick={() => setActiveCategory(tab.id)}>
                  <span>{tab.label}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="list">
          <Swiper slidesPerView={3.5} spaceBetween={10} breakpoints={{ 769: { slidesPerView: 5.5, spaceBetween: 12 } }} watchOverflow>
            {filteredItems.map((item) => {
              const isSelected = selectedItem?.id === item.id;
              return (
                <SwiperSlide key={item.id}>
                  <button className={`item_icon_button ${isSelected ? "is-active" : ""}`} onClick={() => setSelectedItemId(item.id)} aria-label={`Select ${fetchedItemDataById[item.id]?.name || item.id}`}>
                    <img src={item.icon} alt={`${fetchedItemDataById[item.id]?.name || item.id} icon`} />
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
