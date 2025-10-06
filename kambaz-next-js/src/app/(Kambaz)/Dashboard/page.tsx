import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

const reAlign = {
  marginLeft: 150,
}

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={reAlign}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://www.intelligenthq.com/wp-content/uploads/2019/10/history-of-technology.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">HIST220</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    History of Technology</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>


          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://miro.medium.com/v2/0*M4bxiCIjcTK-2Xr6.jpeg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4550</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Web Development</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://images.ctfassets.net/3s5io6mnxfqz/6zxbL5mLDeQZz7e6SPeOKA/1a3bbd623304b9e014b8ac92959dd715/AdobeStock_233207019.jpeg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">ARTG1001</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Design Perspectives: An Introduction to Design in the World</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://i.ytimg.com/vi/uLlDXCak48A/maxresdefault.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">ARTG1290</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Typographic Systems</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://www.careworkshealthservices.com/wp-content/uploads/2019/12/looking-inside-brain.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">PSYCH1904</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    A Look Into The Mind</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://specials-images.forbesimg.com/imageserve/65fb34a45e253140736dc172/960x0.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">ARTD3200</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Designing In Collaboration</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://hti.osu.edu/sites/default/files/Immigration_5.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">GOV2012</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Sideways Politics</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://img.freepik.com/premium-vector/cartoon-color-carnivore-plants-icons-set-vector_287964-8746.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">MUND0121</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Introduction to Botany Without Plants</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://www.cjr.org/wp-content/uploads/2019/04/AP_19108585355946-scaled.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">[Redacted]</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    [Redacted]</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://www.homeschoolcreations.net/wp-content/uploads/Atomic-cookie-model-a-fun-hands-on-way-to-learn-about-atoms-and-the-periodic-table-600x314.png" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">FO5432</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Introduction to Cooking With Atoms</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="https://s35085.pcdn.co/wp-content/uploads/How-to-Write-a-Sentence-1.png" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">PD0100</CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Developing A Sentence</CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

        </Row>
      </div>
    </div >
  );
}

