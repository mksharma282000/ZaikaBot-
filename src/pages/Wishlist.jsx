import Navbar from "../Components/Navbar";
import Footer from "../components/Footer";
import { FaLocationDot } from "react-icons/fa6";
import Image from "../assets/002.jpeg";
import Image2 from "../assets/003.jpeg";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function Wishlist() {
  return (
    <>
      <Navbar />

      <div className="bg-slate-200">
        <div className="flex px-24 pb-8 gap-12">
          <div className="w-2/3 mt-10">
            <p className="font-semibold">Two item you have selected</p>

            <div className="my-4 bg-white flex gap-5 p-4 rounded">
              <img className="h-32 w-32 object-fit" src={Image} alt="img" />

              <div className="w-[550px]">
                <p className="font-bold">Choco Lava Cake</p>
                <p className="text-sm text-gray-600 pt-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                  maxime?
                </p>
              </div>

              <div className="pt-4 pl-10">
                <p className="text-blue-900 font-bold">Rs.109.00</p>
                <div className="flex pt-2">
                  <button className="p-1 border">
                    <MdOutlineDeleteForever />
                  </button>
                  <p className="p-1 border text-sm"> 20 </p>
                  <button className="p-1 border">
                    <IoMdAdd />
                  </button>
                </div>
              </div>
            </div>
            <div className="my-4 bg-white flex gap-5 p-4 rounded">
              <img className="h-32 w-32 object-fit" src={Image2} alt="img" />

              <div className="w-[550px]">
                <p className="font-bold">Choco Lava Cake</p>
                <p className="text-sm text-gray-600 pt-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                  maxime?
                </p>
              </div>

              <div className="pt-4 pl-10">
                <p className="text-blue-900 font-bold">Rs.109.00</p>
                <div className="flex pt-2">
                  <button className="p-1 border">
                    <MdOutlineDeleteForever />
                  </button>
                  <p className="p-1 border text-sm"> 20 </p>
                  <button className="p-1 border">
                    <IoMdAdd />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 mt-10">
            <p className="font-semibold">Choose a delivery address</p>
            <div className="mt-4 px-4 py-3 bg-white rounded">
              <div className="flex gap-3">
                <div className="pt-3">
                  <FaLocationDot size={26} />
                </div>
                <div>
                  <p className="text-blue-950 font-bold">SELECT LOCATION</p>
                  <p className="text-xs opacity-70 pt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, sunt?
                  </p>
                  <div className="flex justify-end">
                    <button className="border border-green-900 px-4 py-2 font-bold text-green-900 hover:backdrop-brightness-75">
                      ADD LOCATION
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-semibold mt-6">Price details</p>

            <div className=" mt-4 px-4 py-3 bg-white rounded">
              <div className="flex flex-col gap-4 font-medium text-gray-900 text-[15px]">
                <div className="flex justify-between">
                  <p>Sub total</p>
                  <p>Rs.658.00</p>
                </div>

                <div className="flex justify-between">
                  <p>Tax & Delivery</p>
                  <p>Rs.58.00</p>
                </div>

                <div className="flex justify-between">
                  <p>Sub total</p>
                  <p>Rs.716.00</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="border border-green-900 px-4 py-2 font-bold text-green-900 hover:backdrop-brightness-75">
                  ORDER & PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
