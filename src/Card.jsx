import profilePic from './assets/cardProfile.jpeg';

function Card(props){
    //const p1 = 'Hemalatha';
    //const p2 = 'Arish';
    //const p3 = 'Jeeva';

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile pic" />
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-text'>I am {props.text}</p>
        </div>
    )
}

export default Card