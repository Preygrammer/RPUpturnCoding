import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getDiscussion } from "../actions";
import DiscussionItem from "./DiscussionItem";
import "../assets/scss/components/_discussion.scss";
import { useParams } from "react-router-dom";

function Discussion({ discussion }) {
  const dispatch = useDispatch();
  const params = useParams();
  const discussionWithoutReplies = _.omit(discussion, ["replies"]);

  console.log(discussionWithoutReplies);

  if (!discussion) {
    return <div>Loading</div>;
  }

  useEffect(() => {
    dispatch(getDiscussion(params.id));
  }, [dispatch]);

  return (
    <div className="discussion">
      <div className="discussion-top">
        <div className="discussion-top-title">
          <h3>Comments</h3>
        </div>

        <button className="discussion-top-btn">New Comment</button>
      </div>

      {discussion &&
        discussion?.map((disc, idx) => {
          return <DiscussionItem key={disc.id} {...disc} />;
        })}
    </div>
  );
}

const mapStateToProps = ({ discussion: { discussion } }) => {
  return {
    discussion,
  };
};

export default connect(mapStateToProps)(Discussion);
