import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react"
import BooingRow from "./BooingRow";
import axios from 'axios';
import useAxiosSecure from "../../hooks/useAxiosSecure";




const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()

    // const url = `http://localhost:5000/bookings?email=${user?.email}`
    const url = `/bookings?email=${user?.email}`

    useEffect(() => {

        // fetch(url,{credentials: 'include'})
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setBookings(data)
        //     })

        axiosSecure.get(url)
            .then(res => setBookings(res.data))


    }, [axiosSecure, url])

    const handelDelete = (id) => {
        const proceed = confirm('are you sure')

        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('delete successFully')
                        const remanding = bookings.filter(booking => booking._id !== id)
                        setBookings(remanding)
                    }
                })

        }

    }

    const handelBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }
    return (
        <div>
            <h2 className="text-5xl text-center">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <BooingRow
                                key={booking._id}
                                handelDelete={handelDelete}
                                handelBookingConfirm={handelBookingConfirm}

                                booking={booking}>

                            </BooingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;
