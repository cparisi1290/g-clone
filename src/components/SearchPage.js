import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="search-headerBody">
          <Search hideButtons />
          <div className="searchPage-options">
            <div className="searchPage-optionsLeft">
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage-option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage-option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage-option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage-option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage-optionsRight">
              <div className="searchPage-option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage-results"></div>
    </div>
  );
}

export default SearchPage;