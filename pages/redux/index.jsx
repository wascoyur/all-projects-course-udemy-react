import Head from "next/head";
import React from "react";
import { createStore } from "redux";

const store = createStore(reducer);

const index = () => {
  return (
    <div>
      <Head>
        <title>Redux</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="container m-2">
        <h2>counter {}</h2>
        <button type="button" className="btn btn-primary m-2">
          +
        </button>
        <button type="button" className="btn btn-primary m-2">
          -
        </button>
      </div>
    </div>
  );
};

export default index;

function reducer(state = 0, action) {
  switch (action.type) {
    case "inc":
      return (state += 1);
    case "dec":
      return (state -= 1);

    default:
      return state;
  }
}
