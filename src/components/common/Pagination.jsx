import React from 'react'
import _ from 'lodash';

export default function Pagination(props) {

    const { itemsCount, pageSize } = props;

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
                        <li key={page} class="page-item">
                            <a class="page-link">{page}</a>
                        </li>
                    ))
                }

            </ul>
        </nav>
    )
}
