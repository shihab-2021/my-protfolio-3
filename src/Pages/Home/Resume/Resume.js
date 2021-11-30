import React, { useEffect, useState } from "react";
// import resume from "../../../../images/resume.png";
import onsAuto from "../../../images/onsAuto.png";
import onsTour from "../../../images/onsTour.png";
import onsMedico from "../../../images/onsMedico.png";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import Button from "@restart/ui/esm/Button";

const Resume = () => {
  const [projects, SetProjects] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => SetProjects(data));
  }, []);
  return (
    <div id="resume" className="container my-5">
      <h1 data-aos="fade-down" className="heading mb-5">
        <span>Projects</span>
        <hr
          className="m-0 p-0 fw-bold"
          style={{ width: "50px", height: "3px" }}
        />
      </h1>
      <div className="row g-3">
        {projects.map((project) => (
          <div key={project.key} className="col-md-12 col-lg-6">
            <Card
              className="bg-dark text-light"
              style={{ border: "1px solid black" }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={project.image}
                alt="green iguana"
              />
              <CardContent className="row">
                <Typography
                  className="col-12 fw-bold"
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {project.name}
                </Typography>
                <CardActions
                  className="col-12"
                  style={{ textDecoration: "none" }}
                >
                  <h6 className="float-right">
                    <a
                      target="_blank"
                      className="btn btn-light rounded-pill outer-shadow hover-in-shadow"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/shihab-2021/onsAuto-React-Project/tree/main/onsAuto-client-side-code"
                    >
                      <i class="fab fa-git"></i>
                    </a>
                  </h6>
                  <h6>
                    <a
                      target="_blank"
                      className="btn btn-light rounded-pill"
                      style={{ textDecoration: "none" }}
                      href="https://onsauto-6360e.web.app/"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                    <Link
                      to={`/details/${project.key}`}
                      className="w-50 text-center my-2"
                    >
                      <button className="btn btn-outline-success">
                        Detail <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </Link>
                  </h6>
                </CardActions>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
