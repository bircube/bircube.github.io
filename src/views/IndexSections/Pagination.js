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
import { Pagination, PaginationItem, PaginationLink, Col } from "reactstrap";

class PaginationSection extends React.Component {
  render() {
    return (
      <>
        <Col lg="5">
          <h3 className="h4 text-success font-weight-bold mb-5">Pagination</h3>
          <nav aria-label="Page navigation example" className="mb-4">
            <Pagination>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  5
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
          <nav aria-label="Page navigation example">
            <Pagination>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="fa fa-angle-left" />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="fa fa-angle-right" />
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </Col>
      </>
    );
  }
}

export default PaginationSection;
