

const CurrentCookingTableHead = () => {
    return (
        <div>


            <div className="border-2 mx-5"><hr /></div>
            <div className="overflow-x-auto">



                <table className="table w-full mt-4">
                    {/* head */}

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>

                        </tr>
                    </thead>

                </table>

            </div>

        </div>
    );
};

export default CurrentCookingTableHead;