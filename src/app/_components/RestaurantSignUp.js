

const RestaurantSignUp = () => {
    return (
        <>
            <div className=" max-w-[600px] w-full mx-auto bg-white border p-10 mt-4 rounded-md">
            <h3 className="text-3xl text-slate-900 text-center">
            Sign Up
            </h3>
            <div className="flex flex-col gap-4 justify-center mt-5">
                <div>
                    <input className="w-full p-3 bg-slate-200 rounded-sm" type="text" placeholder="Enter Your Email " />
                </div>
                <div>
                    <input className="w-full p-3 bg-slate-200 rounded-sm" type="password" placeholder="Enter Your Password " />
                </div>
                <div>
                    <input className="w-full p-3 bg-slate-200 rounded-sm" type="password" placeholder="Confirm Your Password " />
                </div>
                <div>
                    <input className="w-full p-3 bg-slate-200 rounded-sm" type="text" placeholder="Enter Your Address " />
                </div>
                <div>
                    <input className="w-full p-3 bg-slate-200 rounded-sm" type="text" placeholder="Enter Your City " />
                </div>
                <div>
                    <input className="w-full p-3 bg-slate-200 rounded-sm" type="number" placeholder="Enter Your Contact No. " />
                </div>
                <div className="flex justify-center items-center rounded-sm">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-sm">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default RestaurantSignUp;