





import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

const FriendList = ({friends}) => {
  return (
    <div className={css.container}>
      <ul className={css.friendList}>
      {friends.map((friend) => {
        // eslint-disable-next-line react/jsx-key
        return <li><FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        
        
      /></li>;
      })}
      </ul>
    </div>
  );
};

export default FriendList;
