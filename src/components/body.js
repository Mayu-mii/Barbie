import React from "react";
import "../App.css";

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        {this.props.titles.map((data) => {
          if (data.count === "first") {
            return (
              <div>
                <h3>{data.title}</h3>
                <h2>{data.subtitle}</h2>
              </div>
            );
          }
        })}
        <div className="flex mt-20">
          {this.props.list.map((data) => {
            if (data.type === "purpose") {
              return (
                <div className="col-4">
                  <div className="center">
                    <iframe
                      width="80%"
                      height="300"
                      src={data.link}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div>
                    <h4>
                      {data.label} {data.hashtag}{" "}
                    </h4>
                  </div>
                </div>
              );
            } else if (data.type === "commercials") {
              return (
                <div className="col-4">
                  <div className="center">
                    <iframe
                      width="80%"
                      height="300"
                      src={data.link}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div>
                    <h4>{data.label}</h4>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <hr />
        {this.props.titles.map((data) => {
          if (data.count === "second") {
            return (
              <div>
                <p className="content">{data.title}</p>
              </div>
            );
          }
        })}
        <div className="flex mt-20">
          {this.props.list.map((data) => {
            if (data.type === "content") {
              return (
                <div className="col-4 center-div">
                  <img src={data.link} alt="" />
                  <p
                    className="platform"
                    style={{
                      color:
                        data.platform === "YOUTUBE"
                          ? "#A52A2A"
                          : data.platform === "DOCUMENTARY"
                            ? "#5F8575"
                            : "#6E260E",
                    }}
                  >
                    {data.platform}
                  </p>
                  <p className="title">{data.label}</p>
                  <p className="description">{data.description}</p>
                  <p className="extra">{data.extra}</p>
                  <p
                    className="arrow"
                    style={{
                      color:
                        data.watch_on === "Youtube"
                          ? "#A52A2A"
                          : data.watch_on === "Hulu"
                            ? "#5F8575"
                            : "#6E260E",
                    }}
                  >
                    Watch on {data.watch_on} →
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div className="back-to-top">
          <div>
            <span>↑</span>
            <p>BACK TO TOP</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
