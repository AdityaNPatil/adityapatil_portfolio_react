import React from 'react'

const InternCard = ({ internship }) => {
    return (
        <div className="internship-card" >
            <img src={internship.image} alt={internship.title} className="internship-image" />
            <div className="internship-content">
                <h3>{internship.title}</h3>
                <p>{internship.description}</p>
                <p><strong>Duration:</strong> {internship.duration}</p>
            </div>
        </div>
    )
}

export default InternCard
