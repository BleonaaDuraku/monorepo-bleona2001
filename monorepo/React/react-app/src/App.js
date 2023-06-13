import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import { useState } from "react";
import HeaderAntd from "../src/layouts/Header/HeaderAntd";
import "../src/components/pages/Home.css";
import FooterAntd from "../src/layouts/Footer/FooterAntd";
import { Layout} from 'antd';

const { Content } = Layout;


function App() {
  const [currentState, setCurrentState] = useState("1/2");
  const [selectedService, setSelectedService] = useState("");

  const handleService = (serviceName) => {
    setCurrentState("2/2");
    setSelectedService(serviceName);
  };

  const handleGoBack = () => {
    setCurrentState("1/2");
  };

  return (
    <Layout className="layout">
    <HeaderAntd currentState={currentState} />
    <Content className="content">
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Home currentState={currentState} handleService={handleService} />
        }
      />
      <Route
        path="/services/"
        element={
          <Services
            currentState={currentState}
            selectedService={selectedService}
            handleGoBack={handleGoBack}
          />
        }
      />
    </Routes>
    </Content>
    <FooterAntd/>
  </Layout>
  );
}

export default App;
