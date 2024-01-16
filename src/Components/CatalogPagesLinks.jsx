import { useMemo } from "react";

export default function CatalogPagesLinks({ selectedPageNum,
  onPageBtnClick, pagesCount }) {

  const pagesBtns = Array.from({ length: pagesCount }, (_, i) =>
    <PageLinkBtn key={i} pageNum={i + 1}
      onPageBtnClick={onPageBtnClick}
      isSelected={i + 1 === selectedPageNum} />
  );

  return <div className="pages-links">
    {pagesBtns}
  </div>;
}

function PageLinkBtn({ pageNum, onPageBtnClick, isSelected }) {
  const buttonStyle = { backgroundColor: isSelected ? 'red' : '' };

  return <button style={buttonStyle}
    onClick={() => onPageBtnClick(pageNum)}>
    {pageNum}
  </button>;
}