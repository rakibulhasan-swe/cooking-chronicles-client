import React from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();
  return (
    <>
      <div className="container pt-5" ref={ref}>
        <div className="row g-4">
          <div className="col-md-6">
            <div>
              <h4>
                The differences between uncontrolled and controlled components.?
              </h4>
              <p className="fw-light lh-lg py-3">
                An uncontrolled element is form element that manages its own
                states internally. In simple words the state of the componentis
                not controlled by react. And on the other hand a controlled
                element is a element that states controlled by React itself.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4>How to validate React props using PropTypes?</h4>
              <p className="fw-light lh-lg py-3">
                React has an internal mechanism for props validation called
                PropTypes. React components use a special property called
                propTypes to set up type checking. When props are passed to a
                React component, they are checked against the type definitions
                configured in the propTypes property. When an invalid value is
                passed for a props, a warning is displayed on the console. One
                thing to remember that, type checking propTypes can happen only
                in development mode.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4>Difference between nodejs and express JS?</h4>
              <p className="fw-light lh-lg py-3">
                Node Js is a runtime environment that allows us to run
                JavaScript code outside the browsers. Node js provides a
                platform for building server-side applications. Whereas express
                js is framework of node js that used for building web
                applications and APIs. It makes easier to buuld server side
                applications because it provides a set of tools and
                abstractions.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4>
                What is a custom hook, and why will you create a custom hook?
              </h4>
              <p className="fw-light lh-lg py-3">
                It is a reusable functions that encapsulates some logic and
                state within a functional component. Custom hook allows us to
                split away complex logic/code into reusable pieces of code that
                can be shared across multiple components. Custo hooks are
                created using use prefix and they follow the same rules as built
                in hooks.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center py-5">
          <Pdf targetRef={ref} filename="blog.pdf">
            {({ toPdf }) => (
              <button
                className="btn btn-primary rounded-0 py-2 px-4"
                onClick={toPdf}
              >
                Generate Pdf
              </button>
            )}
          </Pdf>
        </div>
      </div>
    </>
  );
};

export default Blog;
