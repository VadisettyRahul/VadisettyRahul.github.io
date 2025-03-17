"use client";
import MainTitle from "@/common/mainTitle";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsEnvelopeOpen } from "react-icons/bs";

export default function ContactForm() {
  const { sectionRefs } = useActiveSectionContext();

  return (
    <div
      ref={(el) => (sectionRefs.current["CONTACT"] = el)}
      id="contact"
      className="scroll-mt-10"
    >
      <MainTitle heading={{ title: "Contact", icon: BsEnvelopeOpen }} />
      <div className="text-white flex items-center justify-center mt-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Section */}
            <div>
              <h2 className="text-2xl font-bold mb-8 dark:text-white text-[#212529] border-b-2 border-yellow-500 inline-block font-larken">
                My Office
              </h2>
              <p className="dark:text-white text-[#212529]">Ashburn,VA , 20148</p>
              {/* <p className="dark:text-white text-[#212529]">Frisco, TX 75035</p>
              <p className="mt-4 dark:text-white text-[#212529]">
                <strong>Email:</strong>{" "}
                <a href="mailto:me@suren.us" className="text-yellow-500">
                  me@suren.us
                </a>
              </p> */}

              {/* Social Links */}
              <h2 className="text-2xl font-bold dark:text-white font-larken text-[#212529] mt-6 border-b-2 border-yellow-500 inline-block">
                Follow Us
              </h2>
              <ul className="mt-2">
                <li className="flex justify-between items-center border-b dark:text-white text-[#212529]">
                  <a href="https://www.linkedin.com/in/rahulv91/" className="hover:underline mb-1 py-1">
                    LinkedIn
                  </a>
                  <span>↗</span>
                </li>
                {/* <li className="flex justify-between items-center border-b dark:text-white text-[#212529]">
                  <a href="#" className="hover:underline mb-1 py-1">
                    Facebook
                  </a>
                  <span>↗</span>
                </li>
                <li className="flex justify-between items-center dark:text-white text-[#212529]">
                  <a href="#" className="hover:underline py-1">
                    Twitter
                  </a>
                  <span>↗</span>
                </li> */}
              </ul>
            </div>

            {/* Right Section: Contact Form */}
            <div className="rounded-lg  ">
              <form className="space-y-4">
                <div>
                  <label className="block dark:text-white text-[#212529]">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-transparent border border-gray-700 rounded-md focus:ring focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block dark:text-white text-[#212529]">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 bg-transparent border border-gray-700 rounded-md focus:ring focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block dark:text-white text-[#212529]">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-transparent border border-gray-700 rounded-md focus:ring focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block dark:text-white text-[#212529]">
                    Message *
                  </label>
                  <textarea
                    className="w-full p-2 bg-transparent border border-gray-700 rounded-md focus:ring focus:ring-yellow-500"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button className="bg-yellow w-fit hover:bg-yellow text-black px-4 py-2 rounded-md font-bold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
