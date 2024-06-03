import userData from './userData.json';
import friends from "./friends.json";





import './App.css'
import Profile from './components/Profile/Profile';
import Friendlist from './components/FriendList/FriendList'
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
      <Friendlist friends={friends} />
      <TransactionHistory />
    </>
  )
}

export default App
