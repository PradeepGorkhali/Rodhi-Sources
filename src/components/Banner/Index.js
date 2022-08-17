import React, { useState } from 'react'
import { Button, Label, Modal, ModalHeader } from 'reactstrap';
import './style.css'
import { db } from '../../components/firebase';
function Index() {
  const [modal, setModal] =useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Quotes")
    .add({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      alert("Message has been submitted");
    })
    .catch((error) => {
      alert(error.message);
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className='Container'>
    <div className='banner'>
      <h3>Sourcing & Importing Goods from China has Become So imple and Effective with Rodhi</h3>
   
    <div className='button_section'>
        <div className='Quote'>
          <Modal
          size=''
          isOpen={modal}
          toggle= {()=> setModal(!modal)}
          >
            <ModalHeader
            
            toggle= {()=> setModal(!modal)}
            >
            <form className='form' onSubmit={handleSubmit}>
              <h3>Get a Quote</h3>
              <label>Name</label>
              <input 
              
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
              <label>Email</label>
              <input 
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <label>Message</label>
              <textarea 
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type='submit'>Submit</button>
            </form>
            </ModalHeader>
          </Modal>
        <button className="button-30" role="button" onClick={() => setModal(true)}>Get a Quote</button>
        </div>
        <div className='call'>
        <button className="button-30" role="button">Schedule a Call</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Index
