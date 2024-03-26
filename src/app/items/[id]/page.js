'use client';

import { useEffect, useState } from 'react';
import { fetchItemDetail } from '@/service/ItemService';
import Text from '@/components/Text/Text';
import Container from '@/components/Container/Container';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ItemDetail from '@/components/ItemDetail/ItemDetail';
import Spinner from '@/components/Spinner/Spinner';

export default function ItemDetailPage({ params }) {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (params.id) {
      fetchItemDetail(params.id, setResponse, setLoading, setError)
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <Container>
        <Spinner>
          <Text size="14">Buscando detalle...</Text>
        </Spinner>
      </Container>
    );
  }

  return error
    ? (
      <Container>
        <Text size="14">Ocurrio un error al buscar los resultados.</Text>
      </Container>
    ) : (
      <>
        <Breadcrumbs categories={response.categories} />
        <Container>
          <ItemDetail city="Capital Federal" {...response.item} />
        </Container>
      </>
    );
}
