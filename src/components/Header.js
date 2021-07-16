import { connect } from "react-redux";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 12px 50px 8px;
  width: 100%;
  margin: 1rem auto 3rem;

  div {
    width: 100%;
    display: flex;
    justify-content: left;
  }

  img {
    height: 22px;
  }

  h2 {
    height: 22px;
  }
`;

const Header = ({ currentPrice }) => {
  return (
    <HeaderContainer>
      <div>
        <div>
          <img
            src="https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/logo_black.png"
            alt="Bitcoin.com logo"
          />
        </div>
        <div>
          <h2>Current BCH Price: ${`${currentPrice}`}</h2>
        </div>
      </div>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => {
  const { currentPrice } = state;
  return currentPrice;
};

export default connect(mapStateToProps)(Header);
