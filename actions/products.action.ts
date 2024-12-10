'use server';

export const getProducts = async () => {
  const host = process.env.NEXT_PUBLIC_API_HOST;

  const response = await fetch(
    `${host}/api/catalog_system/pub/products/search?fq=C:/922/&_from=0&_to=20&O=OrderByScoreDESC`,
  );

  if (!response.ok) {
    throw new Error(`Error fetching service products: ${response.statusText}`);
  }

  const articles = await response.json();
  return articles;
};
