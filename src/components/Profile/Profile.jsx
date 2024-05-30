import css from "./Profile.module.css";

const Profile = ({ username, tag, location, stats, avatar }) => {
  return (
    <div className={css.container}>
      <div>
        <span className={css.circleImage}>
          <img src={avatar} alt="User avatar" width="100" />
        </span>

        <h3>{username}</h3>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.friendList}>
        <li className={css.stats}>
          <span>Followers</span>
          <span className={css.statsItem}>{stats.followers}</span>
        </li>
        <li className={css.stats}>
          <span>Views</span>
          <span className={css.statsItem}>{stats.views}</span>
        </li>
        <li className={css.stats}>
          <span>Likes</span>
          <span className={css.statsItem}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
