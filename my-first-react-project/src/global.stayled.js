import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
    box-sizing: border-box;
}
img{
    max-width: 100%;
}
p{
    line-height: 1.5rem;
}
`