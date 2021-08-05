import { FormEvent, useState } from 'react';

import Input from './Input';

import '../../styles/Contact/contact.scss';

interface IContact {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePhone = (phone: string) => {
    const re = /^[0-9\b]+$/;

    if (phone === '' || re.test(phone)) {
       setPhone(phone)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const data = {
      name,
      phone,
      email,
      message
    } as IContact;

    console.log(data);

    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  }

  return (
    <section className="contactSection">
      <div className="boxTitle">
        <h2>CONTATO</h2>
        <div className="boxShadow"></div>
      </div>

      <div className="boxSubTitle">
        <h3>Envie sua mensagem</h3>
        <div className="boxShadow"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          value={name}
          placeholder="Nome"
          autoComplete="false"
          onChange={(e) => setName(e.target.value)}
        />

        <div>
          <Input
            name="phone"
            type="string"
            value={phone}
            placeholder="Telefone"
            autoComplete="false"
            maxLength={11}
            onChange={e => handlePhone(e.target.value)}
          />
          
          <Input
            name="email"
            type="email"
            value={email}
            placeholder="E-mail"
            autoComplete="false"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          name="message"
          value={message}
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      <div className="contactDots"></div>
    </section>
  );
}