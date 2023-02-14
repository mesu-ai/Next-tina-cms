import React from 'react';

const HtmlMark = ({content}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        // className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default HtmlMark;