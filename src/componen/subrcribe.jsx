import React, { Component } from "react";

export class Subrcribe extends Component {
  render() {
    return (
      <div>
        <div className="py-5 px-3">
          <div className="container mt-4 sporteens-bg-banner p-5 rounded">
            <h3 className="text-white text-center">
              Subscribe to our newslater !!
            </h3>
            <p className="text-white text-center">
              Get interested offer from us
            </p>

            <div className="text-center">
              <input
                type="button"
                className="btn btn-white"
                value="Subscribe Now !!"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subrcribe;
