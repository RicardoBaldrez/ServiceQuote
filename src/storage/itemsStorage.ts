import AsyncStorage from '@react-native-async-storage/async-storage';

const ITEMS_STORAGE_KEY = '@service_quote:items';
const NEXT_NUMBER_STORAGE_KEY = '@service_quote:next_quote_number';

async function get(): Promise<any[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error('GET_ITEMS_STORAGE_ERROR', { cause: error });
  }
}

async function getById(id: string): Promise<any | null> {
  const items = await get();
  const item = items.find((item) => item.id === id);
  return item || null;
}

async function add(item: any): Promise<void> {
  const items = await get();
  const stored = await AsyncStorage.getItem(NEXT_NUMBER_STORAGE_KEY);
  const number = stored ? Number(stored) + 1 : 1;
  await AsyncStorage.setItem(NEXT_NUMBER_STORAGE_KEY, String(number));
  const updateItems = [...items, { ...item, quoteNumber: number }];
  await save(updateItems);
}

async function update(item: any): Promise<void> {
  const items = await get();
  const updateItems = items.map((i) => (i.id === item.id ? item : i));
  await save(updateItems);
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
  getById,
  add,
  remove,
  save,
  update,
};
