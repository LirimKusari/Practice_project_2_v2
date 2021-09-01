import styled from "styled-components";

const CardWrapper = styled.div`
  /* max-width: 55rem; */
  height: 100%;

  border-radius: 15px;

  color: white;
`;

const Card = (props) => {
  const Classes = "card " + props.className;
  return <CardWrapper className={Classes}>{props.children}</CardWrapper>;
};

export default Card;
