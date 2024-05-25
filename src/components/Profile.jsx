import css from './Profile.module.css'


const Profile = ({username, tag, location, stats, avatar  }) => {

    return(
        <div className = {css.container}>
            <div >
                <img src= {avatar} alt="User avatar" width="100"  />
                <h3>{username}</h3>
                <p>{tag}</p>
                <p>{location}</p> 
                
        </div>
            <ul>
            <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
            </li>
            <li>
            <span>Views</span>
            <span>{stats.views}</span>
            </li>
            <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
            </li>
            </ul>
        </div>
    )
}
    
export default Profile