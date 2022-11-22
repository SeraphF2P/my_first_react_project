import { StyledBtn } from '../Styled/btn'

export const Btn = props => {
    const theme = {
        normal: {
            background: `${props.color}`
        }, skelaton: {
            border: `2px solid ${props.color}`, color: `${props.color}`
        }
    }
    return (
        <>
            <StyledBtn style={{ ...theme[props.type] }}>
                {props.content}
            </StyledBtn>
        </>
    )
}
export default Btn;