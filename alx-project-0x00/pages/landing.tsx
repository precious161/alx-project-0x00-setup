import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small" styles="text-sm px-3 py-1 rounded-sm" />
      <Button title="Medium" styles="text-base px-4 py-2 rounded-md" />
      <Button title="Large" styles="text-lg px-6 py-3 rounded-lg" />
      <Button title="Rounded Full" styles="text-base px-4 py-2 rounded-full" />
    </div>
  );
};
export default Landing;
