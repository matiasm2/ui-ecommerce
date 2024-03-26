import {
  AUTHOR,
  ITEM_DETAIL_ENDPOINT,
  ITEM_ID_KEY,
  ITEM_SEARCH_ENDPOINT,
} from '@/utils/constants';

const validateAuthor = (author, response, setResponse, setLoading, setError) => {
  if (author.name === AUTHOR.name && author.lastname === AUTHOR.lastname) {
    setResponse(response);
    setLoading(false);
  } else {
    setError(true);
    setLoading(false);
  }
};

export async function fetchItems(term, setResponse, setLoading, setError) {
  const res = await fetch(
    `${ITEM_SEARCH_ENDPOINT}?q=${term}`,
  ).catch(() => {
    setError(true);
    setLoading(false);
  });
  const { author, categories, items } = await res.json();
  validateAuthor(
    author,
    { categories, items },
    setResponse,
    setLoading,
    setError,
  );
}

export async function fetchItemDetail(id, setDetail, setLoading, setError) {
  const res = await fetch(
    ITEM_DETAIL_ENDPOINT.replace(ITEM_ID_KEY, id),
  ).catch(() => {
    setError(true);
    setLoading(false);
  });
  const { author, categories, item } = await res.json();
  validateAuthor(author, { categories, item }, setDetail, setLoading, setError);
}
