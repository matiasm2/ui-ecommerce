import './ItemDetail.scss';
import Image from 'next/image';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import { getPrice } from '@/utils/itemUtils';

function ItemDetail({
  link,
  title,
  condition,
  price,
  picture,
  free_shipping: freeShipping,
  description,
  sold_quantity: soldQuantity,
}) {
  return (
    <div className="item-detail">
      <div className="item-detail__preview">
        <Image
          src={picture}
          alt="Product preview"
          width={680}
          height={680}
        />
        <div className="item-detail__info">
          <div className="item-detail__title">
            <Text size="14">
              {condition === 'new'
                ? `Nuevo - ${soldQuantity} vendidos`
                : `${soldQuantity} vendidos`}
            </Text>
            <Text size="24" bold>{title}</Text>
          </div>
          <div className="item-detail__price">
            <Text size="46">{getPrice(price)}</Text>
            {freeShipping && (
              <Image
                src="/ic_shipping@2x.png"
                alt="Freeshipping"
                width="32"
                height="32"
              />
            )}
          </div>
          <div className="item-detail__button">
            <Button href={link}>Comprar</Button>
          </div>
        </div>
      </div>
      <div className="item-detail__description">
        {description ? (
          <>
            <Text size="28">Descripción del producto</Text>
            <Text size="16" type="secondary">{description}</Text>
          </>
        ) : (
          <Text size="16" type="secondary">
            No hay descripción del
            producto
          </Text>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
