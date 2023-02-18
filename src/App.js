import './App.css';
import Header from './header';
import StudentCard from './studentcard';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
function App() {
  const list = [
    {
      userId:1,
      username: 'Rizwan',
      profileImg: '',
      lastName: 'Ali',
      desc:'CEO'
    }
  ]
  const username ="Rizwan"
  return (
    <div className="App">
      <header className="App">
        
        {/* <h1>Hello {username == 'someone'? username:'Ali'}</h1> */}
        {
          list.map((e) => {
            return(
              <>
              <h1>{e.username}</h1>
              <h1>{e.lastName}</h1>
              <h1>{e.desc}</h1>
              </>
            )
          })
        }
       
        
      </header>
    </div>
    // <div>
    //   {
    //     <><Header></Header><StudentCard></StudentCard></>
          
    //     }
    // </div>
  );
}

export default App;
