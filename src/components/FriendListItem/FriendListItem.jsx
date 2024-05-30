import friends from "../../friends.json";
import FriendList from "../FriendList/FriendList";

import css from "./FriendListItem.module.css";

const FriendListItem = () => {
  return (
    <div className={css.container}>
      <ul className={css.friendList}>
        {friends.map((el) => {
          return (
            <FriendList
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

export default FriendListItem;
