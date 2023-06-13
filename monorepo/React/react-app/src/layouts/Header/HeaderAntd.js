import { Header } from "antd/es/layout/layout";
import '../../components/pages/Home.css'
const HeaderAntd = ({currentState}) => {

  return (
    <Header className="header">
      <div className="header-content">
        <p className="service">Choose Service</p>
        <p>{currentState}</p>
      </div>
    </Header>
  );
};

export default HeaderAntd;