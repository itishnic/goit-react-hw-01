import css from "./FriendListItem.module.css";

import clsx from "clsx";

const FriendList = ({ avatar, name, isOnline }) => {
  const classNames = clsx(
    css.stats,
    css.container,
    isOnline ? css.onLine : css.ofLine
  );

  return (
    <>
      <li className={classNames}>
        <div>
          <img src={avatar} alt="Avatar" width="48" />
          <p>{name}</p>

          {isOnline ? (
            <p
              style={{
                color: "green",
              }}
            >
              isOnline
            </p>
          ) : (
            <p
              style={{
                color: "red",
              }}
            >
              isOfline
            </p>
          )}
        </div>
      </li>
    </>
  );
};

export default FriendList;