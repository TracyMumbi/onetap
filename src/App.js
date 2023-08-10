import { useState } from 'react';
import './App.css';
import {useGoogleOneTapLogin} from "react-google-one-tap-login"

function App() {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [image, setImage] = useState([])
  const [email_verified, setEmail_Verified] = useState([])
  useGoogleOneTapLogin({
    onSuccess: (response) => {
      setName(response.name)
      setEmail(response.email)
      setEmail_Verified(response.email_verified)
      setImage(response.picture)
    },
    onError: (error) => console.log(error),
    googleAccountConfigs: {
      client_id: "714677259140-dhujfnhm4c8sqosahh9ivjgc7lt5j6dn.apps.googleusercontent.com",
    },
  })
  return (
    <div className="app">
     {name}<br/>
     {email}<br/>
     {email_verified}<br/>
     {image}<br/>
    </div>
  );
}

export default App;
