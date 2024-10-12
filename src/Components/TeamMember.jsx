export default function TeamMember({ name, designation, description, img }) {
  return (
    <>
      <div className=" w-full md:w-[350px]">
        <div className="w-full">
          <img
            className="object-cover rounded-lg"
            src={img}
            alt="ProfileImage"
          />
        </div>
        <div className="pt-3 font-sans">
          <h5 className="font-bold text-lg ">{name}</h5>
          <p className=" font-medium text-sm">{designation}</p>
          <p className=" font-normal  text-xs">{description}</p>
        </div>
      </div>
    </>
  );
}
