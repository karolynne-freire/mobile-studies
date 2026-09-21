const API_URL = 'https://dummyjson.com';

async function request(endpoint) {
  const response = await fetch(
    `${API_URL}${endpoint}`
  );

  if (!response.ok) {
    throw new Error(
      `Erro ao acessar a API: ${response.status}`
    );
  }

  return response.json();
}


// ==============================
// PRODUTOS
// ==============================

export async function getProducts(
  sortBy = null,
  order = null
) {
  let endpoint = '/products?limit=0';

  if (sortBy && order) {
    endpoint += `&sortBy=${sortBy}&order=${order}`;
  }

  return request(endpoint);
}


// ==============================
// PRODUTO POR ID
// ==============================

export async function getProductById(id) {
  return request(`/products/${id}`);
}


// ==============================
// BUSCA
// ==============================

export async function searchProducts(
  query,
  sortBy = null,
  order = null
) {
  let endpoint =
    `/products/search?q=${encodeURIComponent(query)}`;

  if (sortBy && order) {
    endpoint += `&sortBy=${sortBy}&order=${order}`;
  }

  return request(endpoint);
}


// ==============================
// CATEGORIAS
// ==============================

export async function getCategories() {
  return request('/products/categories');
}


// ==============================
// LISTA DE CATEGORIAS
// ==============================

export async function getCategoryList() {
  return request('/products/category-list');
}


// ==============================
// PRODUTOS POR CATEGORIA
// ==============================

export async function getProductsByCategory(
  category,
  sortBy = null,
  order = null
) {
  let endpoint =
    `/products/category/${encodeURIComponent(category)}?limit=0`;

  if (sortBy && order) {
    endpoint += `&sortBy=${sortBy}&order=${order}`;
  }

  return request(endpoint);
}


// ==============================
// PRODUTOS ORDENADOS
// ==============================

export async function getProductsSorted(
  sortBy,
  order = 'asc'
) {
  return request(
    `/products?sortBy=${sortBy}&order=${order}&limit=0`
  );
}
