import './App.css';
import Demo from './Demo';

function App() {

  let name  = 'react app'
  let className = 'App-header';
  console.log('App')
  return (
    <>
    <div className="">
      <div className={className}>
         {name}
        
      </div>
    </div>
    <Demo/>
    </>
  );
}



export default App;
