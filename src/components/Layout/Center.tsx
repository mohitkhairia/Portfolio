import React from "react";
import Introduction from "components/Introduction/Introduction";
import "./center.scss";
import About from "components/About";
import LazyLoad from 'react-lazyload';
import Project from "components/projects/Project";
// import OtherProjects from "components/projects/OtherProjects";
import Touch from "components/Touch";
import Gitcontro from "components/gitcontribution/gitcontro";
import Static from "components/statatic/statatic";

const Center = () => {
  return (
    <div>
      <span className="tag">&lt;body&gt;</span>
      <Introduction />
      <LazyLoad once height={566}>
        <About />
      </LazyLoad>
      <LazyLoad once height={566}>
        <Project />
      </LazyLoad>
      {/* <LazyLoad once height={566}>
        <OtherProjects />
      </LazyLoad> */}
      <LazyLoad once height={566}>
        <Gitcontro/>
      </LazyLoad>
      <LazyLoad once height={566}>
        <Static/>
      </LazyLoad>
      <LazyLoad once height={566}>
        <Touch />
      </LazyLoad>

      <span className="tag">&lt;/body&gt;</span>
    </div>
  );
};

export default Center;
