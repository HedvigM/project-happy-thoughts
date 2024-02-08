import React from "react";

const List = ({ list, handleLikesIncrease }) => {
  return (
    <div>
      {list.map((list) => (
        <div className="list grid" key={list._id}>
          <p className="message">{list.message}</p>
          <div>
            <button
              className={list.hearts > 0 ? "heart-liked" : "heart"}
              onClick={() => handleLikesIncrease(list._id)}
            >
              <span role="img" aria-label="heart emoji">
                {" "}
                ❤️
              </span>
            </button>
            x {list.hearts}
          </div>
          <p className="date">{list.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default List;