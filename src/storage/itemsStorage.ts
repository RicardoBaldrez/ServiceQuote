import AsyncStorage from '@react-native-async-storage/async-storage';

const ITEMS_STORAGE_KEY = '@service_quote:items';

async function get(): Promise<any[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error('GET_ITEMS_STORAGE_ERROR', { cause: error });
  }
}

async function add(item: any): Promise<void> {
  const items = await get();
  const updateItems = [...items, item];
  await save(updateItems);
}

async function getById(id: string): Promise<any | null> {
  const items = await get();
  const item = items.find((item) => item.id === id);
  return item || null;
}

async function remove(id: string): Promise<void> {
  const items = await get();
  const updateItems = items.filter((item) => item.id !== id);
  await save(updateItems);
}

async function save(items: any[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error('SAVE_ITEMS_STORAGE_ERROR', { cause: error });
  }
}

export const itemsStorage = {
  get,
  add,
  getById,
  remove,
  save,
};
