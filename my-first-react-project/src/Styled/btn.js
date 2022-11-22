import styled from "styled-components";

const StyledBtn = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  cursor: pointer; 
  padding: 8px 16px; 
  width: 100px;
  height: 100px;
  marker: none; 
  width: fit-content; 
  border-radius: 16px; 
  box-sizing: border-box;
  background: ${({ color }) => color};
  &:hover {
    background-color: ${({ props }) => props.type === 'skelaton' ? props.color : 'red'};
    -shadow: 0 0 .3rem 1px ${({ color }) => color};
  }
  &:active {
    box-shadow : inset - 1px - 1px .3rem 1px rgb(0, 0, 0, .5)
}
`;
export { StyledBtn };


