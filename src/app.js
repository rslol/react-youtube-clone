import React, { Component } from "react";
import _ from "lodash";
import SearchBar from "./components/searchBar";
import YTSearch from "youtube-api-search";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetail";
library.add(faSearch);

const API_KEY = "AIzaSyD-bI6BTtxhjpwLnaOiUdDdy9HWvrKyjJ4";

/* class based components are used whenever we need to use state within our component */
/* functional components are used whenever we can just use props from a parent component */

class App extends Component {
  constructor(props) {
    super(props);
    /* you initialize your state within the constructor method */
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("tennis");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      /* How to change state is with setState */
      this.setState({
        /* All the videos get pushed into the video array */
        videos: videos /* selectedVideo initial value is the first video in the video array */,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    /* This is how to use lodash, the first argument takes the function and the second one takes the delay in milliseconds */
    const videoSearches = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <React.Fragment>
        <SearchBar onSearchTerm={videoSearches} />
        {/* this.state.videos[0] refers to the first video */}
        <VideoDetail video={this.state.selectedVideo} />
        {/* This is how you pass info to child elements */}
        <VideoList
          /* This function takes a video and updates the state of selectedVideo */
          /* onVideoSelect & videos are props that can be passed down to child elements */
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </React.Fragment>
    );
  }
}

export default App;
