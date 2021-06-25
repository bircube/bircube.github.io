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
import { Badge, Col } from "reactstrap";

class Labels extends React.Component {
  render() {
    return (
      <>
        <Col lg="5">
          <h3 className="h4 text-success font-weight-bold mb-5">Labels</h3>
          <Badge className="text-uppercase" color="primary" pill>
            Primary
          </Badge>
          <Badge className="text-uppercase" color="success" pill>
            Success
          </Badge>
          <Badge className="text-uppercase" color="danger" pill>
            Danger
          </Badge>
          <Badge className="text-uppercase" color="warning" pill>
            Warning
          </Badge>
          <Badge className="text-uppercase" color="info" pill>
            Info
          </Badge>
        </Col>
      </>
    );
  }
}

export default Labels;
