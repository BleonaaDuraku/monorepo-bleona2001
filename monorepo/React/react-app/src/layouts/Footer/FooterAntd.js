import { Footer } from "antd/es/layout/layout";
import pabau from "../../assetss/img/pabau.png"
import "../../components/pages/Home.css"
const FooterAntd = () => {
  return (
    <Footer className="footer">
      Powered By <img alt="pabau-logo" src={pabau} className="logo" />
    </Footer>
  );
};

export default FooterAntd;
