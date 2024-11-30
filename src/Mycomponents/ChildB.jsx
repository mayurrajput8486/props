const ChildB = (props) => {
    return(
        <div>
            <h2>I am ChildB Comp</h2>
            <div>
                <p>Email - {props.email} </p>
                <img src={props.logo} alt='react logo'/>
            </div>
        </div>
    )
}
export default ChildB