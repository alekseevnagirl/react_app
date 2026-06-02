import React, {useMemo} from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
  
  const pagesArray = useMemo(() => {
    return getPagesArray(totalPages)
  }, [totalPages])

  return (
    <div className="page__wrapper">
      {pagesArray.map(p => 
        <span 
          onClick={() => changePage(p)}
          key={p} 
          className={page === p ? 'page__current page' : 'page'}
        >
          {p}
        </span>
      )}   
    </div>  
  );
};

export default Pagination;