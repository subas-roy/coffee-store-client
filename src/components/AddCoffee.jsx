import { Helmet } from "react-helmet";
import Swal from 'sweetalert2'
import Links from "./Links";

const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, quantity, supplier, taste, category, details, photo };
    console.log(newCoffee);

    // send data to the server
    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }

  return (
    <div className="bg-[#F4F3F0] px-24 py-2  px">
      <Helmet>
        <title>Add New Coffee | Coffee Store</title>
      </Helmet>
      <Links />
      <h2 className="text-3xl font-extrabold">Add New Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* row name & quantity */}
        <div className="md:flex gap-4">
          <div className="w-full">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
            </label>
            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
          </div>
          <div className="w-full">
            <label className="form-control w-1/2">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
            </label>
            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
          </div>
        </div>
        {/* row supplier and taste*/}
        <div className="md:flex gap-4">
          <div className="w-full">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
            </label>
            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
          </div>
          <div className="w-full">
            <label className="form-control w-1/2">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
            </label>
            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
          </div>
        </div>
        {/* row category & details */}
        <div className="md:flex gap-4">
          <div className="w-full">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
            </label>
            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
          </div>
          <div className="w-full">
            <label className="form-control w-1/2">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
            </label>
            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
          </div>
        </div>
        {/* row photo url */}
        <div>
          <div className="w-full">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Photo</span>
              </div>
            </label>
            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
          </div>
        </div>
        <input className="btn btn-block bg-gray-500 text-white mt-8" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;