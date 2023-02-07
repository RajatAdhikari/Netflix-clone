import React from 'react'

export default function Cards(props) {
  return (
    <>


  <li>
    <a href="" className="card">
      <img src={props.link? props.link:   "https://i.imgur.com/oYiTqum.jpg"} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{ props.name }</h3>            
            <span className="card__status">1 hour ago</span> 
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>


    </>
  )
}
