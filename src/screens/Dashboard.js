import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useNavigate } from "react-router";

import ListingPage from "../components/ListingPage";
import CommentsPage from "../components/CommentsPage";

const Dashboard = ({}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    console.log("token is..", token);
    if (token != 123456) {
      navigate("../login");
    }
  }, []);

  const [showListingPage, setShowListingPage] = useState(true);
  const [selectedPostID, setSelectedPostID] = useState(null);

  const handleComments = (showListing, postID) => {
    setShowListingPage(showListing);
    setSelectedPostID(postID);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <section className="main-content h-100">
        <div className="container-fluid  h-100">
          {showListingPage ? (
            <ListingPage handleComments={handleComments} />
          ) : (
            <CommentsPage
              selectedPostID={selectedPostID}
              handleComments={handleComments}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
