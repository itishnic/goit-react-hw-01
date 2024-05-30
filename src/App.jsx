import userData from './userData.json';





import './App.css'
import Profile from './components/Profile/Profile';
import FriendlistItem from './components/FriendListItem/FriendListItem'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'


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
      <FriendlistItem />
      <TransactionHistory />
    </>
  )
}

export default App
