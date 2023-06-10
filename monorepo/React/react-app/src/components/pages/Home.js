import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Card, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import antiwrinketreatment from "../../assetss/img/antiwrinkletreatment.jpg";
import dermalfillers from "../../assetss/img/dermalfillers.jpeg";
import HArmonyCA from "../../assetss/img/HArmonyCA.jpg";
import secretRF from "../../assetss/img/secretRF.jpg";
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
      <Content style={{ padding: "50px" }}>
        <Card style={{ width: "100%" }} bordered={false}>
          <div className="body-content">
            <Card
              style={{ width: "24%" }}
              onClick={handleOptionClick}
              hoverable
              cover={
                <img alt="Anti Wrinkle Treatment" src={antiwrinketreatment} />
              }
              actions={[<ArrowRightOutlined key="arrow" />]}
            >
              <Text>Anti Wrinkle Treatment</Text>
            </Card>
            <Card
              style={{ width: "24%" }}
              onClick={handleOptionClick}
              hoverable
              cover={<img alt="Dermal Fillers" src={dermalfillers} />}
              actions={[<ArrowRightOutlined key="arrow" />]}
            >
              <Text>Dermal Fillers</Text>
            </Card>
            <Card
              style={{ width: "24%" }}
              onClick={handleOptionClick}
              hoverable
              cover={<img alt="Secret RF" src={secretRF} />}
              actions={[<ArrowRightOutlined key="arrow" />]}
            >
              <Text>Secret RF</Text>
            </Card>
            <Card
              style={{ width: "24%" }}
              onClick={handleOptionClick}
              hoverable
              cover={<img alt="HArmonyCA" src={HArmonyCA} />}
              actions={[<ArrowRightOutlined key="arrow" />]}
            >
              <Text>HArmonyCA</Text>
            </Card>
          </div>
        </Card>
      </Content>
      <Footer className="footer">Powered By Pabau</Footer>
    </Layout>
  );
};

export default Home;
