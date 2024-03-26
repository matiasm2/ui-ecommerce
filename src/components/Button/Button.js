import './Button.scss';
import Link from 'next/link';
import Text from '@/components/Text/Text';

function Button({ href, children }) {
  return (
    <Link href={href} className="button">
      <Text size="14" type="quaternary">{children}</Text>
    </Link>
  );
}

export default Button;
