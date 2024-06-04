import css from "./FriendListItem.module.css";

import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classNames = clsx(isOnline ? css.onLine : css.ofLine);

  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.stats}>{name}</p>

      {isOnline ? (
        <p className={classNames}>isOnline</p>
      ) : (
        <p className={classNames}>isOfline</p>
      )}
    </div>
  );
};

export default FriendListItem;
