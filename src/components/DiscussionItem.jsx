import {
  BsSuitHeartFill,
  BsFillFlagFill,
  BsCaretDownFill,
  BsCaretUpFill,
} from "react-icons/bs";
import { FaReply } from "react-icons/fa";
import { useState } from "react";
import DiscussionItemReply from "./DiscussionItemReply";

export default function DiscussionItem({
  fullName,
  message,
  replies,
  dateSubmitted,
  userImg,
  hasReply,
}) {
  const childClass = hasReply ? "child" : "parent";
  const repliesCount = replies.length;

  const [showReply, setShowReply] = useState(false);
  const userReplyDropdown = () => {
    if (childClass === "parent" && repliesCount) {
      return (
        <div className="user-reply">
          <a
            onClick={() => setShowReply(!showReply)}
            className="user-reply-btn"
          >
            {showReply ? <BsCaretUpFill /> : <BsCaretDownFill />}

            <span>{repliesCount} REPLIES</span>
          </a>
        </div>
      );
    }
  };

  return (
    <>
      <div className={`user-comment ${childClass}`}>
        <div className="user-comment-img">
          <img
            src={userImg}
            className="user-comment-img-round"
            alt="User Image"
          />
        </div>

        <div className="user-comment-thread-line"></div>

        <div className="user-comment-details">
          <div className="user-comment-details-name">
            {fullName} &nbsp;
            <small>
              <i>a day ago</i>
            </small>
          </div>
          <p>{message}</p>
          <ul className="user-comment-actions">
            <li>
              <a href="/">
                <FaReply />
              </a>
            </li>
            <li>
              <a href="/">
                <BsSuitHeartFill />
              </a>
            </li>
            <li>
              <a href="/">
                <BsFillFlagFill />
              </a>
            </li>
          </ul>

          {userReplyDropdown()}
        </div>
      </div>

      {replies &&
        replies.map(({ id, fullName, message, userImg }) => {
          return (
            <DiscussionItemReply
              key={id}
              fullName={fullName}
              userImg={userImg}
              message={message}
              showReply={showReply}
            />
          );
        })}
    </>
  );
}
