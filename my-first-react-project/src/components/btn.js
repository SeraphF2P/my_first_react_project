const btn = {
    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', padding: '8px 16px'
    , marker: 'none', width: 'fit-content', borderRadius: '16px', boxSizing: 'border-box'
}
const Btn = props => {
    const data = {
        normal: {
            background: `${props.btn_color}`
        }, skelaton: {
            border: `2px solid ${props.btn_color}`, color: `${props.btn_color}`
        }
    }
    const hoverEffect = e => { e.target.style.boxShadow = `0 0 .3rem 1px ${props.btn_color}`; }
    const remove_hoverEffect = e => { e.target.style.boxShadow = `none`; }
    const clickEffect = e => {
        e.target.style.boxShadow = `inset -1px -1px .3rem 1px rgb(0,0,0,.5)`;
    }
    return (
        <>
            <div style={{ ...btn, ...data[props.type] }} onClick={clickEffect} onMouseEnter={hoverEffect} onMouseLeave={remove_hoverEffect} > {props.content}</div>
        </>
    )
}
export default Btn;