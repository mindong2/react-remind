import styled from "styled-components";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 30px 0;
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
  line-height: 1.35;
`;

const TabWrap = styled.div`
  display: flex;
  gap: 0 20px;
  margin-bottom: 20px;
`;

const Tab = styled.div<{ isActive: boolean }>`
  width: 50%;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.5);
    color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
    padding: 10px 0;
  }
`;

export { Overview, OverviewItem, Description, TabWrap, Tab };
