import Header from './Components/header';
import AddContactForm from './Components/addContactForm';
import ListContacts from './Components/listContacts';
import Footer from './Components/footer';
import { About } from './Components/about';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { useState ,useEffect} from 'react';

function App() {
  let initList;
  if(localStorage.getItem("contactList")!==null){
    initList=JSON.parse(localStorage.getItem("contactList"));
  }
  else{
    initList=[]
  }

  const [contactList,setContactList]=useState(initList);
  const addContactFunc=(name,email)=>{
    let newContactlist=[...contactList];
    newContactlist.push({
      id: contactList.length+1,
      name:name,
      email:email
    });

    setContactList(newContactlist);

  }
  useEffect(()=>{
    localStorage.setItem('contactList',JSON.stringify(contactList))
  },[contactList]);

  const deleteContact=(contact)=>{
    setContactList(contactList.filter((contactd)=>{return contactd!==contact}));
  }
  return (
    <>
    <div className="App">
  <Router>
      <Header heading="Contact List" searchBar={true}/>
    <Routes>
      <Route  exact path="about" element={<About/>} />
      <Route exact path="/" element={<><AddContactForm addContactFunc={addContactFunc}/>
        <ListContacts contactList={contactList} deleteContact={deleteContact}/>
        </>}>
      </Route>
    </Routes>
    <Footer/>
  </Router>
  </div>
    
  </>
  );
}

export default App;
