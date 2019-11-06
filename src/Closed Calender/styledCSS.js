import styled from "styled-components";

const Title = styled.h1`
  font-size: 28px;
  font-family: "CooperHewitt-Bold";
`;

const SubTitle = styled.span`
  font-size: 20px;
  font-family: "GT-Pressura-Regular";
  font-weight: normal;
  background-color: rgb(240, 240, 240);
  margin-left: 15px;
  padding: 5px;
`;

const ClosedCalenderDiv = styled.div`
  padding: 8px;
  height: 208px;
  width: 310px;
  margin:100px auto;
  font-family: "GT-Pressura-Regular";
  background-color: rgb(246, 245, 243);
  box-sizing: border-box;
`;

export {
  Title,
  SubTitle,
  ClosedCalenderDiv
}