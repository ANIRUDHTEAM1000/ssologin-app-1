import './App.css';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
function App() {
  let { id } = useParams();
  const [token, setToken] = useState("");
  const limit = 3;

  if(localStorage.getItem("count")===null){
    localStorage.setItem("count",'0');
  }

  // getStaus function returns promise with true or false based on page up
  async function  getStatus (url)  {
    let a = await axios.get(url)
            .then((response) => {
              if(response.status === 200){
                return true
            }
            else{
              return false
            }
          }).then(data=>data)
            .catch((error)=>{
              return false
            })
    return a;
  }

  // function to redirect
  const redirect = url => {
    window.location.replace(url);
  }

  // UseEffect Function
  useEffect(async ()  => {
    // enters if we get token
    if (typeof (id) !== 'undefined' && id !== null && id !== "" ) {
      document.cookie = id;
      setToken(id);
      localStorage.setItem("count",`${0}`);
      redirect(`http://${window.location.host}/success`)
    } 
    else {
      // if count is less than 3 try to redirect to login else redirect to error page
      if(parseInt(localStorage.getItem("count"))<limit){
        // increment count value of local storage ( count is number of redirections to loginpage )
        localStorage.setItem("count",`${parseInt(localStorage.getItem("count"))+1}`)
        // before redirecton checks if the login page is up else redirects to down page
        let isUp = await getStatus("https://ssologinapp.vercel.app/");
        if(isUp){
          redirect(`https://ssologinapp.vercel.app/cookie/${window.location.host}`);
        }else{
          redirect(`http://${window.location.host}/down`)
        }
      }
      else if(parseInt(localStorage.getItem("count"))>=3){
        localStorage.setItem("count",`${0}`);
        redirect(`http://${window.location.host}/error`)
      }

    }
  }, [])

  return (
    <div className="center">
      <header className="App-header">
      </header>
    </div>
  );

}

export default App;
