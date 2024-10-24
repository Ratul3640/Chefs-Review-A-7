


const TableHead = () => {


    return (
        <div>

            <h1 className="text-[#282828] text-2xl font-semibold text-center mb-4">Want to cook: <span id="cookCount">0</span> </h1>
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
                            <th> <button className="invisible">hellow </button> </th>
                        </tr>
                    </thead>

                </table>

            </div>

        </div>
    );
};

export default TableHead;
