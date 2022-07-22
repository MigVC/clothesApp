import React from 'react'
import "../../styles/style.css"
import react from "../../img/react.png"
import fakestore from "../../img/fakestore.png"
import bootstrap from "../../img/bootstrap.png"

export const HomeScreen = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
      <div>
        <div className='landing'>
          <div className='content text-center text-uppercase text-light'>
            <h2> Welcome to my web page made with React </h2>
            <span className='fst-italic'>front-end development using an API and ReactJS</span>
            <br />
            <a className='btn btn-outline-info py-2 mt-3' target="_blank" rel="noreferrer noopener" href='https://github.com/MigVC'>My github</a>
          </div>
          
        </div>
        
        <div className='row' >
          <div className='col-sm-12 col-md-6 align-self-center'>
            <p className='p-2 ms-2'>
            This website are made using an API called Fake - Store where you are able to find some products information in order to practice your frontend development knowledge.
            </p>
          </div>
          <div className='col-sm-12 col-md-3 pictures'>
            <a href='https://fakestoreapi.com/' target="_blank" rel="noreferrer noopener">
              <img src={fakestore} alt="fakeStoreAPI" className='icon' />
            </a>
          </div>
          <div className='col-sm-12 col-md-3 align-self-center text-center'>
            <p className='text-muted me-2'>
              Click the image if you wanna visit Fake Store API webpage and know more about this useful application.  
            </p>
          </div>
          
        </div>
        
        <div className='row'>
          <div className='col-sm-12 col-md-6 align-self-center'>
            <p className='p-2 ms-2'>
            Also, this website are building using ReactJS. We are using hooks, components, routes, etc in order to figured out all about new concepts in this amazing library.
            </p>
          </div>
          <div className='col-sm-12 col-md-3 pictures'>
            <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer noopener">
              <img src={react} alt='react' className='icon'/>
            </a>
          </div>
          <div className='col-sm-12 col-md-3 align-self-center text-center'>
            <p className='text-muted me-2'>
              Click the image if you wanna visit ReactJS webpage and learn more about this useful library.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-12 col-md-6 align-self-center'>
            <p className='p-2 ms-2'>
            In order to customize our website we are using Bootstrap, a powerful, exxtensible, and feauture-packed frontend toolkit.
            </p>
          </div>
          <div className='col-sm-12 col-md-3 pictures'>
            <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer noopener">
              <img src={bootstrap} alt='bootstrap' className='icon'/>
            </a>
          </div>
          <div className='col-sm-12 col-md-3 align-self-center text-center'>
            <p className='text-muted me-2'>
              Click the image if you wanna visit Boostrap webpage and learn more about this useful framework.
            </p>
          </div>
        </div>

      </div>

      
      
      <div className='bg-dark p-1'>
        <h6 className='text-light text-center'> Made by Miguel 2022 </h6>
      </div>
    </div>
  )
}
