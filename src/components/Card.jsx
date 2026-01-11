
import './Card.css'


function Card({ imge, title, details, demo, github }) {
    return (
        <>
            <div className="card">
                <div className="card-imge">
                    <img src={imge} alt={title} />
                </div>

                <div className="about-card">
                    <p className='card-title'>{title}</p>
                    <p className='card-details'>{details}</p>
                </div>

                <div className="card-btns">
                    <a href={demo} className="demo" target="_blank"><i class="fa-solid fa-link"></i>Demo</a>
                    <a href={github} className="github" target="_blank"><i class="fa-brands fa-github"></i>Github</a>
                </div>
            </div>
        </>
    )
}

export default Card

