import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="w-full h-full flex justify-center items-center relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 max-w-lg w-full overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center">


          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Contact Us
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Please fill out the form below to get in touch with us.
          </p>

          <form className="relative z-50 w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none"
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-full border px-4 py-2 rounded-lg border-gray-500 text-gray-300 hover:bg-gray-700">
              Send Message
            </button>
          </form>

          {/* Meaty part - Meteor effect */}
          <Meteors number={100} />
        </div>
      </div>
    </div>
  );
}

export default page;
