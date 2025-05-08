// filepath: d:\Business\Website\portfolio-mui\src\pages\projects\ProjectPageWrapper.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import ProjectPage from "./ProjectPage";

export default function ProjectPageWrapper() {
  const { id } = useParams(); // Extract the project ID from the URL
  const project = projectsData[id]; // Access the project data by its key

  // Scroll to the top when the project ID changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [id]);

  if (!project) {
    return <div>Project not found</div>; // Handle invalid project IDs
  }

  return <ProjectPage projectData={project} />;
}
