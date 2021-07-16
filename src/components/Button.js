import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => {
      if (props.day) return "#ffa600;";
      if (props.week) return "#4a8dff;";
      if (props.month) return "#00d28d;";
    }}
    #2793ff;
  color: #fff;

  padding: 12px 20px;
  height: 46px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border-radius: 12px;
  border: none;
  text-align: center;

  &:hover {
    box-shadow: rgb(0 123 255 / 20%) 0px 6px 6px,
      rgb(0 125 255 / 25%) 0px 8px 10px;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
