import React, { useContext } from 'react';
import { AppContext } from "./context";

const Welcome = () => {
  const { 
    handleSubmit, 
    username, 
    changeUsername, 
    room, 
    changeRoom, 
    loading, 
    loginError 
  } = useContext(AppContext)

  return (
    <div className='welcome_main'>
      <div className='welcome_title'>
        Collaborative Drawing App
      </div>
      <form className='welcome_form' onSubmit={handleSubmit}>
        <label className='welcome_label'>Nickname:</label>
        <input 
          type="text" 
          autoComplete="off" 
          className='welcome_input' 
          placeholder='Must be unique in the room' 
          value={username}
          onChange={e => changeUsername(e.target.value)}
        />
        <label className='welcome_label'>Room:</label>
        <input 
          type="text" 
          autoComplete="off" 
          className='welcome_input' 
          placeholder='Create or join an existing room' 
          value={room}
          onChange={e => changeRoom(e.target.value)}
        />
        {!loading ?
          <input type="submit" className='welcome_submit' value="Join" />
        :
          <div className='loading_page_circle' />
      }
      </form>
      <div className='welcome_err'>{loginError}</div>
      <a
        className="my_github"
        href="https://github.com/Hani-ALHamad"
        target="_blank"
        rel="noreferrer">
        My GitHub
      </a>
    </div>
  )
}

export default Welcome