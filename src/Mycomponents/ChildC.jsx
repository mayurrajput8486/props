const ChildC = ({company , stu}) =>{
    return(
        <div>
            <h2>I am ChildC Comp</h2>
            <h3>{company}</h3>
            <h3>
                Student Roll No - {stu.rollno} <br/>
                Student name - {stu.name} <br/>
                Student City - {stu.city}
            </h3>
        </div>
    )
}
export default ChildC