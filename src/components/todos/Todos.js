import React, { Fragment } from 'react';
import { MdDelete, MdRadioButtonUnchecked } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import AddTodo from './AddTodo';

const Todos = () => {
  return (
    <Fragment>
      <AddTodo />

      <div className="card mt-3">
        <div className="card-body">
          <h3>
            Todos <span className="text-primary">List</span>
          </h3>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search Todos"
            />
          </div>

          <ul className="list-group mt-5">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <IoIosCheckmarkCircle color="#007bff" size="20" />
                <MdRadioButtonUnchecked color="#007bff" size="20" />
                <span className="ml-1">Cras justo odio</span>
              </div>
              <span>
                <MdDelete color="#db4c3f" size="20" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Todos;
