import TeamMember from "./TeamMember";
import image1 from "../assets/mohitkumar.jpg";
import image2 from "../assets/mohitkumar.jpg";

const members = [
  {
    name: "Mohit Kumar",
    designation: "Front-end Developer | UI/UX",
    description:
      "Former Frontend development intern at NirmanLabs. Early Frontend Developer at edquest",
    img: image1,
  },
  {
    name: "Mohit Saroha",
    designation: "Front-end Developer | UI/UX",
    description:
      "Former Frontend development intern at NirmanLabs. Early Frontend Developer at edquest",
    img: image2,
  },
];
const OurTeam = () => {
  return (
    <div className="bg-slate-200 px-5 text-gray-700 py-16">
      <div className="m-auto py-4 w-1/2">
        <h3 className="hidden md:block font-medium text-5xl text-center leading-tight">
          We are the people who make up Zestify
        </h3>
        <h3 className="md:hidden font-medium text-5xl text-center leading-tight">
          We are the people who make up Zestify
        </h3>
        <p className="my-2 text-center tracking-wide">
          Our philosophy is simple; hire great people and give them the
          resources and support to do their best work
        </p>
      </div>
      <div className="flex gap-20 justify-center">
        {members &&
          members.map((e) => (
            <TeamMember
              key={e.name}
              name={e.name}
              designation={e.designation}
              description={e.description}
              img={e.img}
            />
          ))}
      </div>
    </div>
  );
};
export default OurTeam;
