import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer' },
  { name: 'Agun', job: 'sopno' },
  { name: 'shuvro', job: 'pathor' }
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Razzak', 'Anwar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      <h5>New Components</h5>
      <Friend phone="017777" gmail="01777@gamil.com"></Friend>
      <Friend phone="01999" gmail="01999@gamilcom"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  // console.log(props)
  return (
    <div className='container'>
      <h3>Phone: {props.phone}</h3>
      <p>gmail: {props.gmail}</p>
    </div>
  )
}

export default App;
