import React from 'react';
import PropTypes from 'prop-types';

import './contentLoaderStyles.scss';

const ContentLoader = ({ numberOfItems }) => {
  const displayHTML = [];
  for (let i = 0; i < numberOfItems; i++) {
    displayHTML.push(
      <div className="item mt-2" key={i}>
        <div className="d-flex">
          <div className="item-image" />
          <div className="content">
            <div className="title" />
            <div className="short-title" />
          </div>
        </div>
      </div>,
    );
  }

  return <div>{displayHTML}</div>;
};

ContentLoader.propTypes = {
  numberOfItems: PropTypes.number,
};

ContentLoader.defaultProps = {
  numberOfItems: 1,
};

export default ContentLoader;
