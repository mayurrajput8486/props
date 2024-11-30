const ChildA = (props) =>{
    return(
        <div>
            <h2>I am ChildA Comp</h2>
            <h3>username - {props.username}</h3>
            <h3>Password - {props.password}</h3>
        </div>
    )
}

export default ChildA