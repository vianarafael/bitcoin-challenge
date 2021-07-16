import { connect } from "react-redux";

const Header = ({ currentPrice }) => {
  return (
    <>
      <img
        src="https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/logo_black.png"
        alt="Bitcoin.com logo"
      />
      <h2>Current Price: ${`${currentPrice}`}</h2>
    </>
  );
};

const mapStateToProps = (state) => {
  const { currentPrice } = state;
  return currentPrice;
};

export default connect(mapStateToProps)(Header);
