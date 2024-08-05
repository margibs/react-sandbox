import {
  doctor,
  covid19,
  heartLungs,
  supplement,
  mentalHealth,
  whyYouChooseUs,
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  reviewStar,
} from "../../assets";

const Esheba = () => {
  return (
    <>
      <section className="bg-[#E1EEFF] ibm-plex">
        {/* header */}
        <div className="w-[1440px] mx-auto">
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
                <span className="text-[#0360D9] favorite">Favourite</span>{" "}
                Doctor
              </h1>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
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
          <div className="w-[1440px] mx-auto flex py-4">
            <div className="flex items-center justify-between divide-x divide-blue-100">
              <span className="flex-1 text-center pr-10">
                <p className="text-6xl font-bold text-white">24/7</p>
                <small className="text-white">Online Support</small>
              </span>
              <span className="flex-1 text-center px-10">
                <p className="text-6xl font-bold text-white">100+</p>
                <small className="text-white">Doctors</small>
              </span>
              <span className="flex-1 text-center pl-10">
                <p className="text-6xl font-bold text-white">1M+</p>
                <small className="text-white">Active Patients</small>
              </span>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="w-[1440px] mx-auto ibm-plex">
        {/* Our Consulting Specialists */}
        <div className="pb-12">
          <h1 className="text-[#2E2E2E] text-3xl font-bold pt-12 pb-8">
            Our Consulting Specialists
          </h1>
          <div className="flex w-full justify-center gap-4">
            <div className="flex-1 border border-[#021526] rounded-xl p-4">
              <img
                className="bg-[#E6F5FC] p-5 rounded-full"
                src={covid19}
                alt=""
              />
              <p>Covid-19 Test</p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </small>
            </div>
            <div className="flex-1 border border-[#021526] rounded-xl p-4">
              <img
                className="bg-[#E6F5FC] p-5 rounded-full"
                src={heartLungs}
                alt=""
              />
              <p>Heart Lungs</p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </small>
            </div>
            <div className="flex-1 border border-[#021526] rounded-xl p-4">
              <img
                className="bg-[#E6F5FC] p-5 rounded-full"
                src={supplement}
                alt=""
              />
              <p>Supplement</p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </small>
            </div>
            <div className="flex-1 border border-[#021526] rounded-xl p-4">
              <img
                className="bg-[#E6F5FC] p-5 rounded-full"
                src={mentalHealth}
                alt=""
              />
              <p>Mental Health</p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </small>
            </div>
          </div>
        </div>

        {/* Why You Choose Us? */}
        <div className="flex w-full items-center pb-12">
          <div className="flex-1">
            <img src={whyYouChooseUs} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-[#2E2E2E] text-3xl font-bold pt-12 pb-8">
              Why You Choose Us?
            </h1>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Third section */}
      <section className="bg-[#E1EEFF] ibm-plex">
        <div className="flex w-[1440px] mx-auto items-center py-12">
          {/* What Our Member's Saying About Us */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold py-4">
              What <span className="text-[#0360D9] favorite">Our Member's</span>{" "}
              Saying About Us
            </h1>
            <p className="text-lg py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </p>
            <div className="flex items-center">
              <div className="overlap-images flex-1">
                <img src={user1} alt="" />
                <img src={user2} alt="" />
                <img src={user3} alt="" />
                <img src={user4} alt="" />
                <img src={user5} alt="" />
                <img src={user6} alt="" />
              </div>
              <small className="flex-1">100+ Reviews</small>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex-1 bg-white rounded-xl p-4">
            <div className="flex justify-between">
              <div className="flex flex-1 items-center ">
                <img src={user5} alt="" />
                <div>
                  <p>Jane Cooper</p>
                  <small>12/4/17</small>
                </div>
              </div>
              <div className="flex flex-1">
                <img src={reviewStar} alt="" />
                <img src={reviewStar} alt="" />
                <img src={reviewStar} alt="" />
                <img src={reviewStar} alt="" />
                <img src={reviewStar} alt="" />
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sem velit viverra amet faucibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Esheba;
