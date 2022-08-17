import React, { useState } from 'react'
import './style.css'
import { Button, Label, Modal, ModalHeader } from 'reactstrap';
import { db } from '../firebase';

function Index() {
  const [modal, setModal] =useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  


  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Let's Talk")
    .add({
      name: name,
      email: email,
      phone: phone,
      address: address,
    })
    .then(() => {
      alert("Message has been submitted");
    })
    .catch((error) => {
      alert(error.message);
    });

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };
  return (
    <div className='Container'>
      <Modal
          size=''
          isOpen={modal}
          toggle= {()=> setModal(!modal)}
          >
            <ModalHeader
            
            toggle= {()=> setModal(!modal)}
            >
            <form className='form' onSubmit={handleSubmit}>
              <h3 className='talk_text'>Let's Talk</h3>
              <p className='talk_desc'>We are always interested in new project. Send us your request and we will be back to you soon.</p>
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
              <label for="phone">Enter a phone number:</label>
              <input type="tel"
               id="phone" 
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               name="phone" 
               placeholder="phone" 
               pattern="[6-9]{2}[0-9]{2}[0-9]{6}" required
               />
              <label>Address</label>
              <input
              placeholder='Enter Your Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              />
               
              <button type='submit'>Submit</button>
            </form>
            </ModalHeader>
          </Modal>
        <h3>If you are looking for a reliable import company in Nepal or a smart sourcing company in Nepal, you’ve reached the right place.</h3>
        <button class="button-talk" role="button" onClick={() => setModal(true)}>Let's Talk</button>
        <img src='https://www.rodhisources.com/assets/images/map.gif' alt='talk' className='talk_gif'/>
    </div>
  )
}

export default Index
