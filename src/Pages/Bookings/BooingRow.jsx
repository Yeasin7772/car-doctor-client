

const BooingRow = ({ booking }) => {
    const { date, service, price, img } = booking || {}
    return (
        <div>

            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>

                    <div className="avatar">
                        <div className="rounded w-24 h-12">
                            {

                                img && <img src={img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>


                </td>
                <td>
                    {service}

                </td>

                <td>{date}</td>
                <td>$ {price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>


        </div>
    );
};

export default BooingRow;