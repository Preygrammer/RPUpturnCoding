import { BsSuitHeartFill, BsFillFlagFill } from "react-icons/bs";
import { FaReply } from "react-icons/fa";

export default function DiscussionItemReply({
  fullName,
  message,
  dateSubmitted,
  userImg,
  showReply,
}) {
  return (
    <div className={`user-comment child ${showReply ? "" : "d-none"}`}>
      <div className="user-comment-img">
        <img src={userImg} className="user-comment-img-round" alt="" />
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
      </div>
    </div>
  );
}
