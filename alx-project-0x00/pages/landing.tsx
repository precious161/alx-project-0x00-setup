import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small Buttn" styles="text-sm px-3 py-1 rounded-sm" />
      <Button title="Medium Button" styles="text-base px-4 py-2 rounded-md" />
      <Button title="Large Button" styles="text-lg px-6 py-3 rounded-full" />
    </div>
  );
};
export default Landing;
