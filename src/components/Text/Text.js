import PropTypes from 'prop-types';
import * as styles from './Text.module.scss';

function buildClassNames(size, type, bold) {
  const classNames = [styles.text];
  classNames.push(styles[`size-${size}`]);
  classNames.push(styles[`type-${type}`]);
  if (bold) {
    classNames.push(styles.bold);
  }
  return classNames.join(' ');
}

function Text({
  children, size = '12', type = 'primary', bold = false,
}) {
  const classNames = buildClassNames(size, type, bold);

  return (
    <p className={classNames}>
      {children}
    </p>
  );
}

Text.propTypes = {
  size: PropTypes.oneOf(['12', '14', '16', '18', '24', '28', '46']),
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  bold: PropTypes.bool,
};

export default Text;
