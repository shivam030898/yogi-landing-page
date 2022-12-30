import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Slide1 from "../Assets/asst1.png";
import Slide2 from "../Assets/asst2.png";
import Slide3 from "../Assets/asst3.png";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={Slide2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={Slide3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
