import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import "./Home.css";
const { Text } = Typography;

const Home = ({handleService }) => {
  const services = [
    { id: 1, name: 'Anti Wrinkle Treatment', image: "antiwrinkletreatment.jpg" },
    { id: 2, name: 'Dermal Fillers', image: "dermalfillers.jpeg" },
    { id: 3, name: 'Secret RF', image: "secretRF.jpg" },
    { id: 4, name: 'HArmonyCA', image: "HArmonyCA.jpg" },
    { id: 5, name: 'Profhilo', image: "profhilo.png" },
    { id: 6, name: 'Facials', image: "facial.jpeg" },
    { id: 7, name: 'Sclerotherapy', image: "sclerotherapy.jpg" },
  ];

  return (
        <>
        <Card>
          <div className="body-content">
            {services.map((service) => (
              <Card
                key={service.id}
                onClick={() => handleService(service.name)}
                type="inner"
                cover={
                  <img
                    alt={service.name}
                    src={service.image}
                    className="image"
                  />
                }
                actions={[
                  <Link to="/services" key="arrow">
                    <RightOutlined/>
                  </Link>,
                ]}
                className="card"
              >
                <Text>{service.name}</Text>
              </Card>
            ))}
          </div>
        </Card>
        <Card className="consultation-card" type="inner">
          <Text>
            Not sure about consultation type? Please, call{' '}
            <a href="#">02037959063</a>
          </Text>
        </Card>
        </>
  );
};

export default Home;