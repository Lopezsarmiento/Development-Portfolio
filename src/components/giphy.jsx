import React from "react";
import { Carousel } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import config from "../config.json";

function Giphy(props) {
  const { key } = config.giphy;
  // use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
  const gf = new GiphyFetch(key);
  // configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
  const trendGifs = (offset = 0) => gf.trending({ offset, limit: 20 });
  const fetchGifs = (offset = 0) => gf.search("puppies", { offset, limit: 20 });
  const second = (offset = 5) => gf.search("kitties", { offset, limit: 20 });
  const third = (offset = 5) => gf.search("babies", { offset, limit: 20 });
  const fourth = (offset = 5) => gf.search("wtf", { offset, limit: 20 });

  return (
    <React.Fragment>
      <div className="jumbotron p-3 p-md-5 rounded mt-2 bg-dark">
        <div className="container-fluid">
          <div className="row">
            <Carousel
              gifHeight={200}
              gutter={6}
              fetchGifs={trendGifs}
            ></Carousel>
          </div>
          <div className="row">
            <Carousel
              gifHeight={200}
              gutter={6}
              fetchGifs={fetchGifs}
            ></Carousel>
          </div>
          <div className="row">
            <Carousel
              gifHeight={200}
              gutter={6}
              fetchGifs={second}
              onGifClick={() => window.open()}
            ></Carousel>
          </div>
          <div className="row">
            <Carousel gifHeight={200} gutter={6} fetchGifs={third}></Carousel>
          </div>
          <div className="row">
            <Carousel gifHeight={200} gutter={6} fetchGifs={fourth}></Carousel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Giphy;
