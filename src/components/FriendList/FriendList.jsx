





import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

const FriendList = () => {
  return (
    <div className={css.container}>
      <ul className={css.friendList}>
        {friends.map((el) => {
          return (
            <FriendListItem
              key={el.id}
              name={el.name}
              avatar={el.avatar}
              isOnline={el.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
