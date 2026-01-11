import './Cards.css'
import Card from './Card';


function Cards() {

    const cardsData = [
        {
            id: 1,
            imge:'/wedora.png',
            title: "Wedora - Wedding Services",
            details: "A complete platform for brides offering wedding day services, planning, and booking management for a perfect wedding experience",
            demo:'https://frontend-one-brown-46.vercel.app/',
            github:'https://github.com/ITI-our-team/frontend'
        },
        {
            id: 2,
            imge: '/resturant.png',
            title: "Bella Vista Restaurant",
            details: "Restaurant website showcasing menu, reservations, and special events for an elegant dining experience",
            demo:'https://bella-vista-restaurant-two.vercel.app/',
            github:'https://github.com/nancyemadd0099-collab/Bella_Vista_Restaurant'
        }
    ]
    
    return (
        <div className="cards-container">
            {cardsData.map((card) => (
                <Card
                    key={card.id}
                    imge={card.imge}
                    title={card.title}
                    details={card.details}
                    demo={card.demo}
                    github={card.github}
                />
            ))}
        </div>
    )
}

export default Cards;
