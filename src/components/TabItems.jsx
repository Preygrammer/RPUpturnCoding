import { createRef, useRef, useState, useEffect } from "react";
import { Link, useLocation, useHref } from "react-router-dom";

export default function TabItems() {
  const items = ["Description", "Submissions", "Discussion"];
  const [activeToggle, setActiveToggle] = useState(null);
  const itemsRef = useRef(items.map(() => createRef()));
  const { pathname } = useLocation();
  const currentPageId = pathname.split(/\//)[2] || '';
  const currentTab = pathname.split(/\//)[3] || '';

  const tabItemClick = (index) => {
    setActiveToggle(index);
  };

  useEffect(() => {
     const pageRouteIndex = items.findIndex(item =>item.toUpperCase() === currentTab.toUpperCase());

    if(pageRouteIndex === -1) {
      setActiveToggle(0);
    } else {
      setActiveToggle(pageRouteIndex);
    }

  }, [])

  return (
    <div className="tab-parent">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            ref={itemsRef.current[index]}
            className={`tab-child ${index === activeToggle ? "active" : ""}`}
          >
            <Link
              onClick={() => tabItemClick(index)}
              to={{
                pathname: `/problems/${currentPageId}/${
                  item !== "Description" ? item.toLowerCase() : ""
                }`,
              }}
            >
              {item}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
