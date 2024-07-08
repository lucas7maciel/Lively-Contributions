import Image from "next/image";
import ReactIcon from "/public/stacks/react.svg";
import NextIcon from "/public/stacks/nextjs.svg";
import GithubIcon from "/public/stacks/github.svg";
import TailwindIcon from "/public/stacks/tailwind.svg";
import { StackCard } from "./stackCard";

export default function Stacks() {
  return (
    <section>
      <h3 className="font-bold text-gray-800 text-3xl mb-1">Stacks</h3>
      <p className="font-semibold text-gray-700 mb-6">
        Here is a list of the technologies used in the project:
      </p>

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-8 w-full">
        <StackCard
          iconUrl={NextIcon}
          title="NextJS"
          text="Used for routing, server side rendering and graphs generation"
        />
        <StackCard
          iconUrl={ReactIcon}
          title="ReactJS"
          text="Interface layout and interactions, state management, etc."
        />
        <StackCard
          iconUrl={GithubIcon}
          title="Github"
          text="API was used to get users' contributions data"
        />
        <StackCard
          iconUrl={TailwindIcon}
          title="TailwindCSS"
          text="Styles, animations and layout building"
        />
      </div>
    </section>
  );
}
