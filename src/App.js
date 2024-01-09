import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { ERO, REQUEST, SUC } from './action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './asyncaction/userAsyncAction';

function App() {

  const dis = useDispatch();

  const data= useSelector(y=>y.user);

  console.log(data);

  useEffect(()=>{
    //  for redux
    // dis(REQUEST())
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(y=>y.json())
    // .then(y=>{

    //   dis( SUC(y))
    // }).catch(y=> {


    //   dis(ERO(y))
    // })


    // for thunk
    dis(getUserList(1))

  },[])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;