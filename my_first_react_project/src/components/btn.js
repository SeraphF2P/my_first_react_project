import styled from "styled-components";

function colorMod(color, s = false, l = false, font = false) {
    let c = color;

    let [hue, sat, lig] = c.split(',').map(a => { return +a });;

    if (s) { sat > 50 ? sat -= 5 : sat += 5; }

    if (l) { lig > 50 ? lig -= 10 : lig += 10; }

    if (font) {
        sat = 0;
        lig > 50 ? lig = 5 : lig = 95;
    }

    return `hsl(${hue},${sat}%,${lig}%)`;
}

const StyledBtn = styled.div`
 display: flex; 
  justify-content: center; 
  align-items: center; 
  cursor: pointer; 
  padding: 8px 16px; 
  marker: none; 
  width: fit-content; 
  border-radius: 16px; 
  box-sizing: border-box;
  background-color:${props => props.type === 'normal' ? colorMod(props.color) : null};
  border:2px solid ${props => props.type === 'skelaton' ? colorMod(props.color) : 'transparent'};
  color:${props => props.type === 'skelaton' ? colorMod(props.color) : null};
  &:hover {
    background-color:  ${props => colorMod(props.color, false, true)};
    background-color:${props => props.type === 'skelaton' ? colorMod(props.color) : null};
    border:2px solid ${props => props.type === 'skelaton' ? colorMod(props.color) : 'transparent'};
    box-shadow: 0 0 .3rem 1px   ${props => colorMod(props.color, false, true)};
    color: ${props => colorMod(props.color, false, false, true)};
  }
  &:active {
    box-shadow : inset -1px -1px .3rem 1px rgb(0, 0, 0, .5);
}
`;
export const Btn = props => {
    return (
        <StyledBtn type={props.type} color={props.color}>
            {props.children}
        </StyledBtn>
    )
}