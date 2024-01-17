import './App.css';
import Main from './components/Main'
import Footer from './components/Footer';

export default function App() {
  //Writing JS code here
  const emp = {
    name: "Ganesh Pawar",
    Experience: 10,
    Age: 33,
    Role:"Full Stack Web Developer"
  }
  return (
    <>
      <h2>Employee Details</h2>
      <div className='emp-details'>
        <p>Name of the employee is <u>{emp.name}</u></p>
        <p>He has <b>{emp.Experience} years</b> of experience in {emp.Role} Role.</p>
        <p>He age is {emp.Age}</p>
      </div> 
      <Main></Main>
      <Footer></Footer>
    </> 
  );
}

