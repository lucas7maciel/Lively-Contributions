import AboutUs from "./aboutUs";
import Styles from "./styles";
import Stacks from "./stacks";
import Header from "./header";
import { Dashboard } from "./dashboard";

export default function Docs() {
  return (
    <>
      <div className="flex max-h-screen w-full overflow-hidden">
        <div className="flex-[0_0_290px] px-8 py-6 overflow-y-auto">
          <Dashboard />
        </div>
        <div className="border flex-1 overflow-y-auto">
          <Header />
          <div className="flex-1 flex flex-col gap-6 max-w-[90ch] mt-6 mx-auto px-8 pb-6 pt-2">
            <AboutUs />
            <Styles />
            <Stacks />
          </div>
        </div>
      </div>
    </>
  );
}
