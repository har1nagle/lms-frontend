import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/about-tree.png";
import billGates from "../Assets/Images/bill-gates.png";
import apjAbul from "../Assets/Images/apj.jpg";
import steevJobs from "../Assets/Images/steev-jobs.png";
import ratanTata from "../Assets/Images/ratan tata.png";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus atque accusantium nihil! Quia aut id fuga delectus
              nostrum nisi ipsa assumenda inventore, excepturi porro unde, odio
              dignissimos! Quod, maiores veritatis.
            </p>
          </section>

          <div className="w-1/3">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
              }}
              alt="about main image"
              className="drop-shadow-2xl"
              src={aboutMainImage}
            />
          </div>
        </div>

        <div className="carousel w-1/2 my-16 m-auto">
          <div id="slide1" className="carousel-item relative w-full">
            {/* one */}
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={billGates}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                We all need people who will give us feedback. That's how we
                improve.
              </p>
              <h3 className="text-2xl font-semibold">Bill Gates</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={apjAbul}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                Education is the powerful tool you can use to change the world!
              </p>
              <h3 className="text-2xl font-semibold">A. P. J. Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={steevJobs}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                It's not a faith in technology. It's faith in people.
              </p>
              <h3 className="text-2xl font-semibold">Steve Jobs</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={ratanTata}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                "Success is not about the destination, it's about the journey."
              </p>
              <h3 className="text-2xl font-semibold">Ratan Tata</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
