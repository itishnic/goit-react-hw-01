import userData from './userData.json'



import './App.css'
import Profile from './components/Profile'


function App() {
  

  return (
    <>
      <Profile
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        
        stats={userData.stats}
        
        
      />
    </>
  )
}

export default App
