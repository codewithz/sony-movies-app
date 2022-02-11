import React from 'react'
import _ from 'lodash';

export default function Pagination(props) {

    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    const pageCount = Math.ceil(itemsCount / pageSize);
    console.log("PageCount: ", pageCount);

    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);

    //[1,....., pageCount].map()
    return (
        <nav>
            <ul class="pagination">
                {
                    pages.map((page) => (
                        <li key={page}
                            className={(currentPage === page) ? "page-item active" : "page-item"}>
                            <a className="page-link" onClick={() => onPageChange(page)}>
                                {page}
                            </a>
                        </li>
                    ))
                }

            </ul>
        </nav>
    )
}
