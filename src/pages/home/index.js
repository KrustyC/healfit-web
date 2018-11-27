import React, { Fragment } from "react";
import { Link } from 'react-router-dom'

const Home = () => (
  <Fragment>
    <h1>This is my amazing home</h1>
    <Link to="/about">About</Link>
  </Fragment>
);

export default Home;
