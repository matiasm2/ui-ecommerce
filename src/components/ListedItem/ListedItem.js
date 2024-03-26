import './ListedItem.scss';
import Image from 'next/image';
import Link from 'next/link';
import Text from '@/components/Text/Text';
import { getPrice } from '@/utils/itemUtils';

function ListedItem({
  id,
  title,
  price,
  picture,
  free_shipping: freeShipping,
  city,
}) {
  const itemDetailLink = '/items/'.concat(id);
  return (
    <div className="listed-item">
      <Link href={itemDetailLink}>
        <Image
          src={picture}
          alt="Product preview"
          width={180}
          height={180}
          className="listed-item__preview"
        />
      </Link>
      <div className="listed-item__info">
        <Link
          href={itemDetailLink}
          className="listed-item__price no-styled-link"
        >
          <Text size="24">{getPrice(price)}</Text>
          {freeShipping && (
            <Image
              src="/ic_shipping@2x.png"
              alt="Freeshipping"
              width="24"
              height="24"
            />
          )}
        </Link>
        <Link href={itemDetailLink} className="no-styled-link">
          <Text size="18">{title}</Text>
        </Link>
      </div>
      <div className="listed-item__city">
        <Link href={itemDetailLink} className="no-styled-link">
          <Text type="secondary">{city}</Text>
        </Link>
      </div>
    </div>
  );
}

export default ListedItem;
