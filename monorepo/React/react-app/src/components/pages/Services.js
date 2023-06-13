import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./Home.css"

const Services = ({ selectedService, handleGoBack }) => {
  return (
    <div className="services">
      <Link to="/" key="arrow" onClick={handleGoBack}>
        <ArrowLeftOutlined />
      </Link>
      <h2>{selectedService}</h2>
    </div>
  );
};

export default Services;
