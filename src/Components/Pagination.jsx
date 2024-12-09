import React from "react";
import styled from "styled-components";
import { useFiltercontext } from "../Contaxt/FilterContaxt";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  const { page, totalPages, setPage } = useFiltercontext();
  // console.log(totalPages);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <Wrapper>
        <div className="btns">
          <div className="pagination">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              <FaChevronLeft className="fa-nav" />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <span
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={page === index + 1 ? "active" : ""}
              >
                {index + 1}
              </span>
            ))}

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              <FaChevronRight className="fa-nav" />
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .btns {
    display: flex;
    max-width: fit-content;
    margin: 0 auto;
    padding: 10px;
  }
  .fa-nav {
    font-size: 2rem;
  }
  .pagination {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    // background-color: #f5f5f7;
    background-color: #8490ff;
    padding: 8px 16px;
    border-radius: 8px;
    max-width: 100%;
    margin: 0 auto;
  }
  button {
    border: none;
    outline: none;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
    margin: 0 10px;
  }
  span {
    // font-weight: bold;
    color: white;
    cursor: pointer;
    font-size: 18px;
  }
  .pagination span.active {
    // font-weight: bold;
    background-color: white;
    padding: 4px;
    border-radius: 10px;
    color: black;
    cursor: pointer;
    font-size: 22px;
  }
    @media(max-width:768px){
    .btns{
    max-width:100%;
    margin:0 10px;
    }
    .pagination{
    max-width:90%;
    }
    }
`;

export default Pagination;
