import { Data, ItemInfo } from "@/types";

export const getAllProducts = async (): Promise<ItemInfo[]> => {
  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();

  return data[0].items;
};

export const getAllCategories = async (): Promise<string[]> => {
  let categoriesData: string[] = [];

  const res = await fetch("http://localhost:3001/data");
  const data: Data[] = await res.json();

  data.map((item) => {
    categoriesData.push(item.name);
  });

  return categoriesData;
};

export const getPhones = async (): Promise<ItemInfo[]> => {
  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();

  return data[1].items;
};
