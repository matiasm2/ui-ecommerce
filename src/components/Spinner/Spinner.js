import './Spinner.scss';
import PropTypes from 'prop-types';

function Spinner({ children, column }) {
  return (
    <div className={`spinner-wrapper ${column && 'column'}`}>
      <div className="spinner" />
      {children}
    </div>
  );
}

Spinner.propTypes = {
  column: PropTypes.bool,
};

export default Spinner;
