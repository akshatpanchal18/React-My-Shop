import React from 'react'
import styled from 'styled-components'
import { useFiltercontext } from '../Contaxt/FilterContaxt';

function Filter() {
    const { filters: { text = '' } = {}, allProducts, updateFilterValue, clearFilter } = useFiltercontext();

    const getUniqueData = (data, property) => {
        let newVal = data.map((curElem) => curElem[property]);
        return ["all", ...new Set(newVal)];
    };

    // Unique category data
    const categoryData = getUniqueData(allProducts, "category");

    return (
        <Wraper>
            <div>
                <div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="search-bar"
                            type="text"
                            name="text"
                            value={text}
                            onChange={updateFilterValue}
                            placeholder="Search..."
                        />
                    </form>
                </div>
                <div className="category">
                    <h3>Category</h3>
                    <ul>
                        {categoryData.map((curElem, index) => (
                            <li key={index}>
                                <button
                                    type="button"
                                    name="category"
                                    value={curElem}
                                    onClick={updateFilterValue}
                                    className="category-btn"
                                >
                                    {curElem}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="btn" onClick={clearFilter}>Clear Filter</button>
            </div>
        </Wraper>
    );
}

const Wraper = styled.section`
  .search-bar {
    width: 100%;
    padding: 0.5rem;
    font-size: 16px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    outline: 1px solid #2563eb;
  }
  .category {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 20px 0;
    text-transform: capitalize;
  }
  .category h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
    font-weight: bold;
  }
  .category ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .category li {
    margin-bottom: 10px;
  }
  .category-btn {
    padding: 8px;
    font-size: 1rem;
    color: #555;
    background: none;
    border: none;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    text-align: left;
    width: 100%;
  }
  .category-btn:hover {
    background-color: #f1f1f1;
  }
  .btn {
    padding: 1rem;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #2563eb;
    cursor: pointer;
    transition: transform 0.1s ease-in;
  }
  .btn:hover {
    transform: scale(0.9);
  }
`;

export default Filter;
