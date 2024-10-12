const HeroSection = () => {
  return (
    <div className="container bg-gray-100 m-auto px-5 py-20 ">
      <div className="flex mx-16  gap-5">
        <div className="w-1/2 mt-32 ">
          <h3 className="font-bold text-5xl mb-4 ">
            Order Delicious Food with AI Assistance
          </h3>

          <p className="text-xl mb-6">
            Use our AI-powered chatbot for a convenient ordering experience
          </p>

          <button className="bg-gray-900 px-4 py-2 rounded-md w-28 text-white">
            Order Now
          </button>
        </div>

        <div className="w-1/2 bg-gray-400 rounded-xl">
          <div className="relative bg-white h-96 m-4 rounded-lg">
            <div className="absolute bottom-0 w-full px-2 py-2">
              <input
                className="border-2 w-full border-black rounded-full"
                type="text"
                placeholder="Enter your message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
