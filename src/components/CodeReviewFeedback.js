import React, { useState } from "react";

const reviewObject = {
  readability: { upVote: 0, downVote: 0},
  performance: { upVote: 0, downVote: 0},
  security: { upVote: 0, downVote: 0},
  documentation: { upVote: 0, downVote: 0},
  testing: { upVote: 0, downVote: 0}
}

const FeedbackSystem = () => {
  const [voteState, setVoteState] = useState(reviewObject);

  const upVote = (aspect) =>  {
    const increasedAspect = {};
    increasedAspect[aspect] = {
      ...voteState[aspect],
      ...{upVote: voteState[aspect].upVote +1}
    };
    setVoteState({...voteState, ...increasedAspect});
  };

  const downVote = (aspect) => {
    const decreasedAspect = {};
    decreasedAspect[aspect] = {
      ...voteState[aspect],
      ...{downVote: voteState[aspect].downVote +1}
    };
    setVoteState({...voteState, ...decreasedAspect})
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {Object.keys(reviewObject).map((aspect, index) =>(
          <div className="pa-10 w-300 card">
          <h2>{aspect.toUpperCase()}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid={`upvote-btn-${index}`} onClick={() =>{upVote(aspect)}}>
                          👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid={`downvote-btn-${index}`} onClick={() => {downVote(aspect)}}>
                          👎 Downvote
                </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
            Upvotes: <strong>{voteState[aspect].upVote}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
            Downvotes: <strong>{voteState[aspect].downVote}</strong>
          </p>
          </div>

        ))}

      </div>
    </div>
  );
};

export default FeedbackSystem;
