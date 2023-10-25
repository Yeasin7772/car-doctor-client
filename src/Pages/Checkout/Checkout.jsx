import { useLoaderData } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
    const service = useLoaderData()
    const { _id, title, price ,img} = service || {}

    const { user } = useContext(AuthContext)

    const handelBookService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = user?.email
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                alert('service add successfully')
            }
        })


    }
    return (
        <div>
            <h2>Book service:{title}</h2>


            <form onSubmit={handelBookService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" defaultValue={user?.displayName} className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={"$" + price} className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>

    );
};

export default Checkout;