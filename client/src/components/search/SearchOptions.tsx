import React from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineSortAscending, AiOutlineFilter } from 'react-icons/ai';
import { Form } from 'react-bootstrap';
import { optionsSearch } from '../../helper/optionsSeacrh';

const SearchOptions = ({
    categorySearch,
    changeCategorySearch
}: any) => {
    const options = optionsSearch();
    // console.log(options)
    return (
        <div>
            <ul className="vertical-nav">
                <li className="nav-home">

                    <Link to="/overview">
                        <AiOutlineFilter></AiOutlineFilter> Danh mục
                    </Link>
                    <ul className="vertical-nav-child">
                        {options.category.map((c: any, i: number) => (
                            <li key={i}>
                                <Form.Check
                                    type='radio'
                                    label={c.label}
                                    defaultChecked={c.value === categorySearch}
                                    name='category'
                                    custom
                                    id={c.label}
                                    onChange={() => changeCategorySearch(c.value)}
                                />
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="nav-home">

                    <Link to="/overview">
                        <AiOutlineSortAscending></AiOutlineSortAscending> Sắp xếp theo
                    </Link>
                    <ul className="vertical-nav-child">
                        {options.fields.map((c: any, i: number) => (
                            <li key={i}>
                                <Form.Check
                                    type='radio'
                                    label={c.label}
                                    defaultChecked={i === 0 ? true : false}
                                    name='sortBy'
                                    custom
                                    id={c.label}
                                />
                            </li>
                        ))}
                        <li>
                            <Form.Check
                                type="checkbox"
                                custom
                                name="sortType"
                                label={"Tăng dần"}
                                id={"Tăng dần"}
                                defaultChecked={true}
                            />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SearchOptions
