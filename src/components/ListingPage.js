import React, { useState, useEffect } from "react";
import { getUserInfo } from "../actions/ListingPageActions";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import _ from "lodash";
import PaginatedItems from "./Pagination";
import Loader from "./Loader";
import FeatherIcon from "feather-icons-react";
import "../assets/css/dashboard.css";
import "../assets/css/button.css";
import "../assets/css/header.css";
import "../assets/css/search.css";
import "../assets/css/form.css";

const ListingPage = ({ handleComments }) => {
  const { loading: userInfoLoading, userData } = useSelector(
    (state) => state.userInfo
  );
  const [users, setUsers] = useState([]);
  const [paginatedUsers, setPaginatedUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterApplied, setFilterApplied] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    if (userData.length > 0) {
      setUsers(userData);
      const totalPages = Math.ceil(userData.length / 10);
      setTotalPages(totalPages);
      handlePaginationData(1, userData);
    } else {
      setUsers([]);
    }
  }, [userData]);

  useEffect(() => {
    if (typeof userInfoLoading !== "undefined" && userInfoLoading !== null) {
      if (userInfoLoading === true) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [userInfoLoading]);

  const handlePaginationData = (page, userData) => {
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
    let paginatedUsers = userData.slice(startIndex, endIndex);
    setPaginatedUsers(paginatedUsers);
  };

  const handlePagination = (page) => {
    handlePaginationData(page, users);
  };
  const handleClearSearch = () => {
    setSearchKeyword("");
    dispatch(getUserInfo());
  };
  const handleSearch = () => {
    if (searchKeyword !== "") {
      dispatch(getUserInfo(searchKeyword));
    } else {
      toast.error("Please enter search term", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchKeyword(e.target.value);
  };
  const handleApplyFilter = (order) => {
    let data = _.cloneDeep(users);
    switch (order) {
      case "ascending":
        data.sort(ascending);
        setFilteredUsers(data);
        setFilterApplied(order);
        break;
      case "descending":
        data.sort(descending);
        setFilteredUsers(data);
        setFilterApplied(order);
        break;
      case "no-filter":
        setFilteredUsers({});
        setFilterApplied(null);
        break;
      default:
        setFilteredUsers({});
        setFilterApplied(null);
    }
  };

  function ascending(a, b) {
    if (a.userId < b.userId) {
      return -1;
    }
    if (a.userId > b.userId) {
      return 1;
    }
    return 0;
  }
  function descending(a, b) {
    if (a.userId < b.userId) {
      return 1;
    }
    if (a.userId > b.userId) {
      return -1;
    }
    return 0;
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className="row h-100">
        <div className="col-md-12 mt-3">
          <div className="row">
            <div className="col-6">
              <h2 className="fnt-smi-bld mb-1">Listing Page</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group form">
                <div className="search-box">
                  <FeatherIcon icon="search" />
                  <span className="close-btn">
                    <FeatherIcon icon="x" onClick={handleClearSearch} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter User ID"
                    value={searchKeyword}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="form-group mt-2">
                  <button
                    className="btn btn-outline-secondary text-black fnt-mdm fnt-14"
                    onClick={(e) => handleSearch(e)}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8 d-flex justify-content-end">
              <div className="form-group has-right-icon no-label mr-3"></div>

              <div className="form-group mr-2">
                <button
                  className="btn btn-outline-secondary text-black fnt-mdm fnt-14"
                  onClick={() => handleApplyFilter("ascending")}
                >
                  <FeatherIcon icon="filter" width="20" className="mr-2" />
                  Ascending filter by User ID
                </button>
              </div>
              <div className="form-group mr-2">
                <button
                  className="btn btn-outline-secondary text-black fnt-mdm fnt-14"
                  onClick={() => handleApplyFilter("descending")}
                >
                  <FeatherIcon icon="filter" width="20" className="mr-2" />
                  Descending filter by User ID
                </button>
              </div>

              <div className="form-group">
                <button
                  className="btn btn-outline-secondary text-black fnt-mdm fnt-14"
                  onClick={() => handleApplyFilter("no-filter")}
                >
                  <FeatherIcon icon="x-octagon" width="20" className="mr-2" />
                  Remove Filter
                </button>
              </div>
            </div>
          </div>

          <div className="cnd_table mt-1 mb-3">
            <div className="table-responsive">
              <table className="table">
                <tr>
                  <th width="20%">User ID</th>
                  <th width="20%">Post ID</th>
                  <th width="20%">Title</th>
                  <th width="20%">Body</th>
                  <th width="20%">Comments</th>
                </tr>
                {paginatedUsers.length > 0 &&
                  !filterApplied &&
                  paginatedUsers.map((user) => {
                    return (
                      <tr>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                        <td>
                          <a onClick={() => handleComments(false, user.id)}>
                            Check comments
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                {filteredUsers.length > 0 &&
                  filterApplied &&
                  filteredUsers.map((user) => {
                    return (
                      <tr>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                        <td>
                          <a onClick={() => handleComments(false, user.id)}>
                            {" "}
                            Check comments
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>
            {!filterApplied && searchKeyword === "" && (
              <PaginatedItems
                totalPages={totalPages}
                handlePagination={handlePagination}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
