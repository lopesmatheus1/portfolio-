import React from 'react'
import WPP from '../../assets/icons/whatsapp.svg'
import Git from '../../assets/icons/github1.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import {StyledInput, StyledContainer, StyledContatos} from './StyledContatos'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";


function Contatos() {

  const {register, reset, handleSubmit} = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "05f1e273-ffea-42c5-926a-aecfc9c9d321";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  
  return (
    <section id='Contact' style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
    }}>
      <h2 style={{textAlign:'center', marginBottom:'170px'}}>Entre em contato comigo</h2>
      <StyledContainer>
            <StyledContatos>
            <h2>Contatos</h2>
            <p>Para saber mais sobre meus projetos, acesse meu GitHub. Caso queira entrar em contato, envie uma mensagem através do formulário ou entre em contato pelo WhatsApp ou LinkedIn.</p>
            <div style={{display:'flex', gap:'20px'}}>
                <a href="https://api.whatsapp.com/send/?phone=5532988773513&text=Olá%2C+tudo+bem%3F&type=phone_number&app_absent=0" target='blank'><img src={WPP} alt="" /></a>
                <a href="https://github.com/lopesmatheus1" target='blank'><img src={Git} alt="" /></a>
                <a href="https://www.linkedin.com/in/matheus-marendino-23b039246/" target='blank'><img src={linkedin} alt="" /></a>
            </div>
          </StyledContatos>
          <StyledInput>   
          <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{position: 'relative'}}>
                  <input placeholder='' type="text" {...register("name", { required: true })}/>
                  <label htmlFor="name">Nome</label>
                </div>
                <div style={{position: 'relative'}}>
                  <input placeholder='' type="email" {...register("email", { required: true })}/>
                  <label htmlFor="name">E-mail de contato</label>
                </div>
                <div style={{position: 'relative'}}>
                  <textarea placeholder='' {...register("message", { required: true })}></textarea>
                  <label htmlFor="message">Digite uma mensagem</label>
                </div>
                  <button>Enviar</button>
            </form>


          </StyledInput>
      </StyledContainer>
    </section>
  )
}

export default Contatos
