import '../styles/myExperience.css';

export default function MyExperience() {
    const isiExperiene = [
        {
            title: "Projects",
            count: "+3"
        },
        {
            title: "Client",
            count: "+2"
        },
        {
            title: "Experience",
            count: "1yrs"
        },
    ]

    return (
        <section className="section-experience">
            {isiExperiene.map((items) => (
                <div className='items-experience'>
                    <h2>{items.title}</h2>
                    <p>{items.count}</p>
                    
                </div>
                
            ))}
        </section>
    )
}