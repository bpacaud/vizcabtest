import React, { useState } from "react";

const Pagination = ({ items, children }) => {
  const step = 5;
  const length = items.length;
  const [startIndex, setStartIndex] = useState(0);
  const next = () =>
    setStartIndex((startIndex) =>
      startIndex >= length - step ? startIndex : startIndex + step
    );
  const previous = () =>
    setStartIndex((startIndex) =>
      startIndex <= 0 ? startIndex : startIndex - step
    );
  const displayedItems = items.slice(startIndex, startIndex + step);
  return (
    <div>
      {children(displayedItems)}
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;
