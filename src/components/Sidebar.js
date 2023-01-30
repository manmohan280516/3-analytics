import React from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Sidebar = () => {
  return (
    <>
      <aside
        className="sidebar bg-white"
        style={{ boxShadow: "0px 1px 2px #00000029" }}
      >
        <ul>
          <li className="active">
            <a data-toggle="tooltip" data-placement="bottom" title="Home">
              <span className="icon p-0" style={{ width: "25px" }}>
                <i data-feather="home">
                  <FeatherIcon icon="home" />
                </i>
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
