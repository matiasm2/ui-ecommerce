import './Breadcrumbs.scss';
import Text from '@/components/Text/Text';

function Separator() {
  return (
    <div className="breadcrumbs__separator">
      <Text size="14" type="secondary">{'>'}</Text>
    </div>
  );
}

function Breadcrumb({ category, isLast }) {
  return (
    <div className="breadcrumbs__content">
      <Text size="14" type="secondary">{category}</Text>
      {!isLast && <Separator />}
    </div>
  );
}

function Breadcrumbs({ categories }) {
  return categories && (
    <div className="breadcrumbs">
      <div className="breadcrumbs__content">
        {categories.map((category, index) => (
          <Breadcrumb
            key={category}
            category={category}
            isLast={index === categories.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Breadcrumbs;
