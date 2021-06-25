/*!

=========================================================
* bircube Design System React - v1.1.0
=========================================================

* Product Page: https://www.bircube.com
* Copyright 2020 Bircube Technologies (https://www.bircube.com)
* Licensed under MIT (https://github.com/creativetimofficial/bircube-design-system-react/blob/master/LICENSE.md)

* Coded by Bircube Technologies

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Progress, Col } from "reactstrap";

class ProgressSection extends React.Component {
  render() {
    return (
      <>
        <Col lg="5">
          <h3 className="h4 text-success font-weight-bold mb-4">
            Progress bars
          </h3>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>40%</span>
              </div>
            </div>
            <Progress max="100" value="25" color="default" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Task completed</span>
              </div>
              <div className="progress-percentage">
                <span>60%</span>
              </div>
            </div>
            <Progress max="100" value="60" />
          </div>
        </Col>
      </>
    );
  }
}

export default ProgressSection;
