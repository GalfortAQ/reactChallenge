import './pagination.scss'
import React from "react";

const Pagination = ({ prev, onPrevious, next, onNext }) => {
  const handlerPrevious = () => {
    onPrevious();
  };
  const handlerNext = () => {
    onNext();
  };
  return (
    <div className="pagination row">
      <div className="col-auto me-auto">
        {prev ? <div className='pagination__button --left' onClick={handlerPrevious}>
          <div className='pagination__button--label'>Previous</div>
          </div> : null}
      </div>
      <div className="col-auto">
        {next ? <div className='pagination__button --right' onClick={handlerNext}><div className='pagination__button--label'>Next</div></div> : null}
      </div>
    </div>
  );
};

export default Pagination;
