import React, { useEffect, useState } from "react";
import "./Resume.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

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
                  <div className="social-links">
                    <a
                      target="_blank"
                      className="outer-shadow hover-in-shadow"
                      style={{ textDecoration: "none" }}
                      href={project.git_clink_link}
                    >
                      <i class="fab fa-git"></i>
                    </a>
                    <a
                      target="_blank"
                      className="outer-shadow hover-in-shadow"
                      style={{ textDecoration: "none" }}
                      href={project.live_link}
                    >
                      <i className="fas fa-link"></i>
                    </a>
                    <Link
                      to={`/details/${project.key}`}
                      className="outer-shadow hover-in-shadow"
                    >
                      <i className="fas fa-info"></i>
                    </Link>
                  </div>
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
