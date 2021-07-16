import { connect } from "react-redux";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 3rem;

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
    color: #767c82;
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
