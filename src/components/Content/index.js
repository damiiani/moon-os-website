import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Content(props) {
  const { title, text } = props;

  return (
    <div className="content">
      <h1 className="content-title">{title}</h1>

      <p className="content-text">{text}</p>
    </div>
  );
}

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Content.defaultProps = {
  title: 'Template',
  text: 'Template',
};

export default Content;
