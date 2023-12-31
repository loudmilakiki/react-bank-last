import "./index.css";
import Page from "../../component/page";
import Status from "../../component/status";
import { Link } from "react-router-dom";

const Balance = () => {
  return (
    <Page>
      <header className="content-balance">
        <Status className="status" />

        <div>
          <div className="group1">
            <div className="filter">
              <Link to="./settings">
                <img src="/img/filter.png" />
              </Link>
            </div>
            <p className="descr-balance">Main wallet</p>
            <div className="filter">
              <Link to="./notifications">
                <img src="/img/bell-ringing.png" />
              </Link>
            </div>
          </div>
          <h1 className="title-balance">$ 100.20</h1>
        </div>
      </header>
      <div className="receive">
        <Link to="receive">
          <img src="/img/arrow-down-right.png" />
        </Link>
      </div>
      <div className="send">
        <Link to="send">
          <img src="/img/users.png" width="28" height="28" />
        </Link>
      </div>
      <p className="send__link">
        <Link className="send-link" to="./send ">
          Send
        </Link>
      </p>
      <p className="receive__link">
        <Link className="send-link" to="./receive">
          Receive
        </Link>
      </p>
      <ul className="transactions">
        <li>
          <Link className="transaction-link" to="../balance/transaction">
            <div className="transaction">
              <div className="logo">
                <img src="/img/Frame 17.png" />
              </div>

              <div className="info">
                <div className="user">Jon Duo</div>
                <div className="detail">
                  <h2>12.25</h2>
                  <div>Sending</div>
                </div>
              </div>

              <div className="count-recep">
                <span>-$200.00</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="transaction-link" to="../balance/transaction">
            <div className="transaction">
              <div className="logo">
                <img src="/img/Frame 18.png" />
              </div>

              <div className="info">
                <div className="user">Oleg V.</div>
                <div className="detail">
                  <h2>12.25</h2>
                  <div>Receipt</div>
                </div>
              </div>

              <div className="count-send">
                <span>+$125.00</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="transaction-link" to="../balance/transaction">
            <div className="transaction">
              <div className="logo">
                <img src="/img/Frame 19.png" />
              </div>

              <div className="info">
                <div className="user">Coinbase</div>
                <div className="detail">
                  <h2>10.20</h2>
                  <div>Receipt</div>
                </div>
              </div>

              <div className="count-send">
                <span>+$1.125.00</span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
      <div className="indicator-balance">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};

export default Balance;
