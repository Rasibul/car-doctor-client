

const ServiceCard = ({ service }) => {
    const { img, title, price } = service || {}
    return (
        <div className="card w-96  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ServiceCard;