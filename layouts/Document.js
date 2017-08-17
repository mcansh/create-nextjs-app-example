import React from 'react';
import PropTypes from 'prop-types';
import Meta from '../components/Meta';

const Document = ({ children }) => (
  <div>
    <Meta />
    <div>
      {children}
    </div>
  </div>
);

Document.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Document;