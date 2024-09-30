import axios from 'axios';

export const getAll = async (page) => {
  console.log(page)
  const { data } = await axios.get(`/api/foods?page=${page}`);
  return data;
};

export const search = async (searchTerm, page) => {
  const { data } = await axios.get(`/api/foods/search/${searchTerm}?page=${page}`);
  return data;
};

export const getAllTags = async () => {
  const { data } = await axios.get('/api/foods/tags');
  return data;
};

export const getAllByTag = async (tag, page) => {
  if (tag === 'All') return getAll(page);
  const { data } = await axios.get(`/api/foods/tag/${tag}?page=${page}`);
  return data;
};

export const getById = async foodId => {
  const { data } = await axios.get('/api/foods/' + foodId);
  return data;
};

export async function deleteById(foodId) {
  await axios.delete('/api/foods/' + foodId);
}

export async function update(food) {
  await axios.put('/api/foods', food);
}

export async function add(food) {
  const { data } = await axios.post('/api/foods', food);
  return data;
}
