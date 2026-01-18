import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full">
      <h2 className="text-heading mb-12 ml-12">My Work Experiences</h2>
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
