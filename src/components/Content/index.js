import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Content(props) {
  const { title, text } = props;

  return (
    <div className="content">
      <h1 className="title">{title}</h1>

      <p className="text">{text}</p>
    </div>
  );
}

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Content.defaultProps = {
  title: '',
  text: '',
};

export default Content;
