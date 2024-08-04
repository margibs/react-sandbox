import doctor from "../../assets/doctor.png";

const Esheba = () => {
  return (
    <section className="bg-[#E1EEFF] ibm-plex">
      {/* header */}
      <div className="container mx-auto">
        <header className="flex w-full items-center justify-between py-12">
          <a href="#" className="text-black font-semibold">
            E-<span className="text-[#0360D9]">sheba</span>
          </a>
          <nav className="flex space-x-2 justify-center">
            <a href="#" className="hover:text-blue-500 hover:underline">
              Home
            </a>
            <a href="#">About</a>
            <a href="#">Application</a>
            <a href="#">History</a>
          </nav>
          <span className="flex space-x-2">
            <button className="border border-blue-600 rounded-full p-2 bg-blue-500">
              Log In
            </button>
            <button>Sign Up</button>
          </span>
        </header>
        <div className="flex w-full items-center">
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Find & Search Your{" "}
              <span className="text-[#0360D9] favorite">Favourite</span> Doctor
            </h1>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </small>
            <div className="mt-16">
              <select>
                <option>Doctor's Name</option>
              </select>
              <select>
                <option>Location</option>
              </select>
              <button>Search</button>
            </div>
          </div>
          <div className="flex-1">
            <img
              className="relative w-[20rem] h-auto -bottom-12"
              src={doctor}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Blue section */}
      <div className="bg-[#0360D9]">
        <div className="container mx-auto flex w-full py-4">
          <div className="flex flex-1 items-center justify-between divide-x divide-blue-100">
            <span className="flex-1 text-center">
              <p>24/7</p>
              <small>Online Support</small>
            </span>
            <span className="flex-1 text-center">
              <p>100+</p>
              <small>Doctors</small>
            </span>
            <span className="flex-1 text-center">
              <p>1M+</p>
              <small>Active Patients</small>
            </span>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Esheba;
