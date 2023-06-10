import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Card, Typography } from "antd";
import { RightOutlined  } from "@ant-design/icons";
import antiwrinketreatment from "../../assetss/img/antiwrinkletreatment.jpg";
import dermalfillers from "../../assetss/img/dermalfillers.jpeg";
import HArmonyCA from "../../assetss/img/HArmonyCA.jpg";
import secretRF from "../../assetss/img/secretRF.jpg";
import profhilo from "../../assetss/img/profhilo.png";
import sclerotherapy from "../../assetss/img/sclerotherapy.jpg"
import facial from "../../assetss/img/facial.jpeg"
import pabau from "../../assetss/img/pabau.png"
import "./Home.css";


const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const Home = () => {
  const [currentState, setCurrentState] = useState("1/2");

  const handleOptionClick = () => {
    setCurrentState("2/2");
  };

  return (
    <Layout className="layout">
              <Header className="header">
        <div className="header-content">
          <p className="service">Choose Service</p>
          <p>{currentState}</p>
        </div>
      </Header>
      <Content className="content">
        <Card>
          <div className="body-content">
            <Card
              onClick={handleOptionClick}
              type="inner"
              cover={
                <img
                  alt="Anti Wrinkle Treatment"
                  src={antiwrinketreatment}
                  className="image"
                />
              }
              actions={[
                <Link to="/options" onClick={handleOptionClick} key="arrow">
                  <RightOutlined className="arrow"/>
                </Link>,
              ]}
              className="card"
            >
              <Text className="text-card">Anti Wrinkle Treatment</Text>
            </Card>
            <Card
              onClick={handleOptionClick}
              type="inner"
              cover={
                <img
                  alt="Dermal Fillers"
                  src={dermalfillers}
                  className="image"
                />
              }
              actions={[
                <Link to="/options" onClick={handleOptionClick} key="arrow">
                  <RightOutlined />
                </Link>,
              ]}
              className="card"
            >
              <Text className="text-card">Dermal Fillers</Text>
            </Card>
            <Card
              onClick={handleOptionClick}
              type="inner"
              cover={<img alt="Secret RF" src={secretRF} className="image" />}
              actions={[
                <Link to="/options" onClick={handleOptionClick} key="arrow">
                  <RightOutlined />
                </Link>,
              ]}
              className="card"
            >
              <Text className="text-card">Secret RF</Text>
            </Card>
            <Card
              onClick={handleOptionClick}
              type="inner"
              cover={<img alt="HArmonyCA" src={HArmonyCA} className="image" />}
              actions={[
                <Link to="/options" onClick={handleOptionClick} key="arrow">
                  <RightOutlined />
                </Link>,
              ]}
              className="card"
            >
              <Text className="text-card">HArmonyCA</Text>
            </Card>
            <Card
              onClick={handleOptionClick}
              type="inner"
              cover={<img alt="profhilo" src={profhilo} className="image" />}
              actions={[
                <Link to="/options" onClick={handleOptionClick} key="arrow">
                  <RightOutlined />
                </Link>,
              ]}
              className="card"
            >
              <Text className="text-card">Profhilo</Text>
            </Card>
            <Card
              onClick={handleOptionClick}
              type="inner"
              cover={<img alt="facial" src={facial} className="image" />}
              actions={[
                <Link to="/options" onClick={handleOptionClick} key="arrow">
                  <RightOutlined />
                </Link>,
              ]}
              className="card"
            >
              <Text className="text-card">Facials</Text>
            </Card>
            <Card
              onClick={handleOptionClick}
              type="inner"
              cover={<img alt="sclerotherapy" src={sclerotherapy} className="image" />}
              actions={[
                <Link to="/options" onClick={handleOptionClick} key="arrow">
                  <RightOutlined />
                </Link>,
              ]}
              className="card"
            >
              <Text className="text-card">Sclerotherapy</Text>
            </Card>
          </div>
        </Card>
      </Content>
      <Card className="consultation-card">
        <Text>Not sure about consltation type? Please, call <a href="#">02037959063</a></Text>
      </Card>
      
      <Footer className="footer">Powered By <img alt="pabau-logo" src={pabau} className="logo"/></Footer>
    </Layout>
  );
};

export default Home;
