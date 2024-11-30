import './App.css';
import ChildA from './Mycomponents/ChildA'
import ChildB from './Mycomponents/ChildB'
import ChildC from './Mycomponents/ChildC'
import ChildD from './Mycomponents/ChildD'
import Reactlogo from './Mycomponents/1656223115129.png'
import {Employees} from './Mycomponents/Employees'
function App() {

  const employee = {
    id : 1,
    name : 'Virat',
    contact : 7744556633,
    city : 'Pune'
  }

  const student = {
    rollno : 101,
    name : 'Rohit',
    city : 'Mumbai'
  }

  const imagepath = Reactlogo
  const empdata = Employees

  return (
    <div>
      <h1>Learn React - v18.3.1</h1>
      <h1 className='title'>Props in React</h1>
      <ChildA username='jordan_walke' password='react@123' />
      <ChildB email='reactv18@gmail.com' logo={imagepath}/>
      <ChildC company= 'Facebook' stu={student}/>
      <ChildD version='v18.3' emp={employee} empdetails={empdata}/>
    </div>
  );
}

export default App;
