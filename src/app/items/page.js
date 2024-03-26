'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchItems } from '@/service/ItemService';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Container from '@/components/Container/Container';
import Text from '@/components/Text/Text';
import ListedItem from '@/components/ListedItem/ListedItem';
import Spinner from '@/components/Spinner/Spinner';

export default function Items({ searchParams }) {
  const [response, setResponse] = useState({ categories: [], items: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchParams.search) {
      fetchItems(searchParams.search, setResponse, setLoading, setError)
        .catch(() => setError(true));
    } else {
      router.push('/');
    }
  }, []);

  if (loading) {
    return (
      <Container>
        <Spinner>
          <Text size="14" type="secondary">Buscando resultados...</Text>
        </Spinner>
      </Container>
    );
  }

  return error
    ? (
      <Container>
        <Text size="14" type="secondary">Ocurrio un error al buscar los resultados.</Text>
      </Container>
    )
    : (
      <>
        <Breadcrumbs categories={response.categories} />
        <Container>
          {response.items.length === 0
            ? <Text size="14">No se encontraron resultados.</Text>
            : response.items.map((item) => <ListedItem key={item.id} city="Capital Federal" {...item} />)}
        </Container>
      </>
    );
}
