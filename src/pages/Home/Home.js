import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="jumbotron w-75 container">
      <h1 className="display-4">Hello, this is my form builder website!</h1>
      <p className="lead">
        This is a simple form-builder, you dont need to register or anything
        elso to use it. You can make simple forms for general or more complex
        purpose. Have fun!
      </p>
      <hr className="my-4" />
      <p>
        Start building here! Its just one click!
      </p>
      <Link className="btn btn-primary btn-lg" to="/builder" role="button">
        Start building
      </Link>
    </div>
  );
}

export default Home;
