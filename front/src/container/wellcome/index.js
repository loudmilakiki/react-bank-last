import "./index.css";
import Page from "../../component/page";
import { Link } from "react-router-dom";

const WellcomePage = ({ title = "", description = "" }) => {
  return (
    <Page>
      <div className="content">
        <div className="photo">
          <div className="status-bar"></div>
          <div className="wellcome">
            <h1 className="title">Hello!</h1>
            <p className="description">Wellcome to bank app</p>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button>
          <Link className="button-up" to="./signup">
            Sing up
          </Link>
        </button>
        <button>
          <Link className="button-in" to="./signin">
            Sing in
          </Link>
        </button>
      </div>

      <div className="indicator">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};

export default WellcomePage;
