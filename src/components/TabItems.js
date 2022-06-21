import { Link } from "react-router-dom";

export default function TabItems() {
  return (
    <div className="tab-parent">
      <div className="tab-child active">
        <Link
          to={{
            pathname: `/problems/`,
          }}
        >
          Description
        </Link>
      </div>
      <div className="tab-child">
        <Link
          to={{
            pathname: `/problems/`,
          }}
        >
          Submissions
        </Link>
      </div>
      <div className="tab-child">
        <Link
          to={{
            pathname: `/problems/`,
          }}
        >
          Discussion
        </Link>
      </div>
    </div>
  );
}
