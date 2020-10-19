import React, { useContext, useEffect } from "react";
import { PostContext } from "../contexts/PostContext";
import { getData } from "../Actions";

function Issue(props) {
  const { post, dispatch } = useContext(PostContext);

  const downvote = (e) => {
    console.log("downvote");
  };

  useEffect(() => {
    getData(dispatch);
  }, []);

  return (
    <div>
      {post.map((item) => {
        return (
          <div className="post" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>

            <div className="buttons">
              <div className="votes">
                <button
                  className="upvote"
                  onClick={() => {
                    props.upvote(item.id);
                  }}
                >
                  Upvote
                </button>
                <h3>Votes: {item.points}</h3>
                <button
                  className="downvote"
                  onClick={() => {
                    downvote(item.id);
                  }}
                >
                  Downvote
                </button>
              </div>
              <div className="change">
                <button className="edit">Edit</button>
                <button className="close">Close</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Issue;
