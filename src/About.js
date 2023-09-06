import React from "react";
import { useParams } from "react-router-dom";

function About() {
  const { id } = useParams(); //url la ulla data va store panni vachukum
  // console.log(id)
  return (
    <div>
      <h1 className="text-center text-primary mt-5">Hai i'm Ravindrapandian</h1>
    </div>
  );
}

export default About;
