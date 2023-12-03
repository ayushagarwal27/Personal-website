import React from "react";
const arr = [1, 2, 3, 4, 5];
const MoviesPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {arr.map((item) => (
        <div className="card w-3/4 glass rounded-3xl mx-auto" key={item}>
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary rounded-xl">Learn now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;
