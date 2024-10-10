

const RestaurantLogin = () => {
    return (
        <div className=" max-w-[600px] w-full mx-auto bg-white border p-10 mt-4 rounded-md">
            <h3 className="text-3xl text-slate-900 text-center">
            Login 
            </h3>
            <div className="flex flex-col gap-4 justify-center mt-5">
                <div>
                    <input className="w-full p-3 bg-slate-300 rounded-sm" type="text" placeholder="Enter Your Email " />
                </div>
                <div>
                    <input className="w-full p-3 bg-slate-300 rounded-sm" type="password" placeholder="Enter Your Password " />
                </div>
                <div className="flex justify-center items-center rounded-sm">
                    <button className="bg-slate-600 text-white px-4 py-2 rounded-sm">
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantLogin;