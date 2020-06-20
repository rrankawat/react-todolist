import React from 'react';

const AddTodo = () => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h3>
          Add <span className="text-primary">Todo</span>
        </h3>
        <form>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="What you want to do?"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add New" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
