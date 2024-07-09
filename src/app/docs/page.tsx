import AboutUs from "./aboutUs";
import Styles from "./styles";
import Stacks from "./stacks";
import Header from "./header";
import { Dashboard } from "./dashboard";

export default function Docs() {
  return (
    <>
      <div className="flex max-h-screen w-full overflow-hidden">
        <div className="flex-[0_0_250px] px-8 py-6 overflow-y-auto border-r transition">
          <Dashboard />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Header />
          <div className="flex-1 max-w-[90ch] mt-6 mx-auto px-8">
            <AboutUs />
            <Styles />
            <Stacks />
          </div>
        </div>
      </div>
    </>
  );
}
