import MediaCard from "../components/Card";
import Example from "../components/Navbar";
import styles from "../styles/Home.module.css";
import ResponsiveGrid from "../components/Grid";
import UncontrolledExample from "../components/Slider";
import Create from "../components/InputForm";

export default function Home() {
  return (
    <>
      <Example />
      <UncontrolledExample />
      <div className="card-container">
        <ResponsiveGrid />
      </div>
      <div className="inputform-container">
        <Create />
      </div>
    </>
  );
}
