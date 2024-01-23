/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "OSAD API (Object, Speech and Audio Detection)",
    description:
      "Built a test-driven, packed, and robust API that provides endpoints for converting speech to text and vice versa and object detection within images. The API securely manages user authentication with session tokens and password resets through email. Used Flask for the API development, Torch Vision's fasterrcnn_resnet50_fpn_V2 model for object detection, SpeechRecognition for speech-to-text and pyttsx",
    url: "https://github.com/Aaron-Ontoyin/OSAD-API",
  },
  {
    title: "Drillbotics Reseach Competition",
    description:
      "With my team, I led the development of a python package for simulating directional drilling. We also built an interface for monitoring the processes involved.",
    url: "https://drillbotics.com/umat-2023-team-on-the-national-news/",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Using predictive modeling, I developed a customer churn prediction system using machine learning models on IBM's telco customer churn data. The models used were logistic regression, random forest, SVM, KNN, naive bayes, and XGBoost.",
    url: "https://customer-churn-prediction-ontoyin.streamlit.app/",
  },
  {
    title: "Image Compression App",
    description:
      "I developed an Image compression App that works on multiple image types. The app gives more flexibility allowing you to 'controll your pixels'.",
    url: "https://the-tech-at-virtual-world.blogspot.com/2023/09/image-compression-web-app.html",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
