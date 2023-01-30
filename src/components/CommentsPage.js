import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostComments } from "../actions/ListingPageActions";
import Loader from "./Loader";

const CommentsPage = ({ selectedPostID, handleComments }) => {
  const { loading: postCommentsLoading, postCommentsData } = useSelector(
    (state) => state.postComments
  );
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostComments(selectedPostID));
  }, []);

  useEffect(() => {
    if (postCommentsData.length > 0) {
      setComments(postCommentsData);
    }
  }, [postCommentsData]);

  useEffect(() => {
    if (
      typeof postCommentsLoading !== "undefined" &&
      postCommentsLoading !== null
    ) {
      if (postCommentsLoading === true) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [postCommentsLoading]);

  console.log("comments", comments);
  return (
    <>
      {isLoading && <Loader />}
      <div className="row h-100">
        <div className="col-md-12 mt-3">
          <div className="row">
            <div className="col-6">
              <h2 className="fnt-smi-bld mb-1">Comments Page</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 d-flex justify-content-end">
              <div className="form-group">
                <button
                  className="btn btn-outline-secondary text-black fnt-mdm fnt-14"
                  onClick={() => handleComments(true, null)}
                >
                  Back to Listing Page
                </button>
              </div>
            </div>
          </div>

          <div className="cnd_table mt-1 mb-3">
            <div className="table-responsive">
              <table className="table">
                <tr>
                  <th width="20%">Post ID</th>
                  <th width="20%">Comment ID</th>
                  <th width="20%">Name</th>
                  <th width="20%">Email</th>
                  <th width="20%">Body</th>
                </tr>

                {Object.keys(comments).length > 0 &&
                  comments.map((comment) => {
                    return (
                      <tr>
                        <td>{comment.postId}</td>
                        <td>{comment.id}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsPage;
