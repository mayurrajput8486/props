import './ChildD.css'

const ChildD = (props) =>{
    return(
        <div>
            <h2>I am ChildD Comp</h2>
            <h3>{props.version}</h3>
            <h3>
                Employee Id - {props.emp.id} <br/>
                Employee Name - {props.emp.name} <br/>
                Employee City - {props.emp.city} <br/>
                Employee Contact - {props.emp.contact}
            </h3>
            <table>
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       props.empdetails.map((emp)=>{
                        return(
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.contact}</td>
                            </tr>
                        )
                       }) 
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ChildD