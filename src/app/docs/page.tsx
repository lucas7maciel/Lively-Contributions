import AboutUs from "./aboutUs";
import Styles from "./styles";
import Stacks from "./stacks";
import Header from "./header";

export default function Docs() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-6 px-8 py-6">
        <AboutUs />
        <Styles />
        <Stacks />
      </div>
      </>
  );
}
