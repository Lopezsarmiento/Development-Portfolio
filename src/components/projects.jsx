import React, { Component } from "react";
import config from "../config.json";
import { Link } from "react-router-dom";
import Footer from "./common/footer";

class Projects extends Component {
  state = {
    title: "Projects",
    projects: [
      {
        id: 1,
        name: "Giphy-implementation",
        desc: "A selection of fun Gifs from Giphy.com",
        stack: "#React #api #npm",
        path: "/projects/giphy",
      },
      { id: 2, name: "server", desc: "calling rest-api", stack: "", path: "" },
      { id: 3, name: "bot", desc: "calling rest-api", stack: "", path: "" },
      {
        id: 4,
        name: "webscrapping",
        desc: "calling rest-api",
        stack: "",
        path: "",
      },
      {
        id: 5,
        name: "JavaScript Games",
        desc: "calling rest-api",
        stack: "",
        path: "",
      },
      { id: 6, name: "etc", desc: "calling rest-api", stack: "", path: "" },
    ],
  };
  render() {
    const { projects } = this.state;
    const { name, url } = config.background.projects;
    return (
      <React.Fragment>
        <div className="jumbotron p-3 p-md-5 rounded bg-projects mt-2">
          <div className="container-fluid">
            <div className="row shadow-lg">
              {projects.map((item) => (
                <div key={item.id} className="col-md-6">
                  <div className="card flex-md-row mb-3 h-md-250 shadow-lg">
                    <div className="card-body d-flex flex-column align-items-start">
                      <h3 className="mb-0">{item.name}</h3>
                      <br></br>
                      <p className="card-text mb-auto">{item.desc}</p>
                      <Link to={item.path}>Check it out</Link>

                      <strong className="d-inline-block mb-2 text-dark">
                        {item.stack}
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer name={name} url={url}></Footer>
      </React.Fragment>
    );
  }
}

export default Projects;
