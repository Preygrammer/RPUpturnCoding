import { MdOutlinePendingActions } from "react-icons/md";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import "../assets/scss/components/_card.scss";

export default function Card({ title, countValue }) {
  return (
    <div className="card">
      <div className="card-icon">
        {title == "Problems Left" ? (
          <MdOutlinePendingActions />
        ) : (
          <BsFillFileEarmarkCheckFill />
        )}
      </div>
      <div className="card-content">
        <div className="card-content-title">{title}</div>

        <div className="card-content-count">
          {title == "Problems Left"
            ? countValue + " pending"
            : countValue + " solved"}
        </div>
      </div>
    </div>
  );
}
