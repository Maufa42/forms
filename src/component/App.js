import './App.css';
import Form from './Form';
import Header from './Header';
import Table from './Table';
import {useState} from 'react'
// import ViewCard from './ViewCard';
function App() {
  const [data, setData]= useState(null)
 
  return (
    <div className='container'>
    <Header/>
      <div className='container-fluid'>
      <Form onSubmit = {setData}/>
      </div>
      <Table  getData ={data}/>
      {/* <ViewCard/> */}
    </div>

  );
}

export default App;
