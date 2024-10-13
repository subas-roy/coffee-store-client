import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Links from "./Links";

const UpdateCoffee = () => {
  const coffee = useLoaderData()
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
  const handleUpdateCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <Helmet>
        <title>Update Coffee | Coffee Store</title>
      </Helmet>
      l<Links/>
      <h2 className="text-3xl font-extrabold">Update {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* row name & quantity */}
        <div className="md:flex gap-4">
          <div className="w-full">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
            </label>
            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
          </div>
          <div className="w-full">
            <label className="form-control w-1/2">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
            </label>
            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
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
            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
          </div>
          <div className="w-full">
            <label className="form-control w-1/2">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
            </label>
            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
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
            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
          </div>
          <div className="w-full">
            <label className="form-control w-1/2">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
            </label>
            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
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
            <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" />
          </div>
        </div>
        <input className="btn btn-block bg-gray-500 text-white mt-8" type="submit" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;