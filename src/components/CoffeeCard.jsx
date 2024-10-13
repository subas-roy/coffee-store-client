
const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Coffee" />
      </figure>
      <div className="flex gap-2 w-full justify-between pr-4">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{category}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
          <button className="btn join-item">View</button>
          <button className="btn join-item">Edit</button>
          <button className="btn join-item">X</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;