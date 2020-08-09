import { useUserSpaces } from "data/spaces";
import Link from "next/link";
import { OffsetBackground } from "components/ui";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Hero, HeroTitle, HeroDescription } from "components/ui";

const Home = () => {
  const spaces = useUserSpaces();

  return (
    <OffsetBackground>
      <h1 className="text-4xl font-bold mb-10">Your Spaces</h1>
      {spaces.length === 0 ? (
        <Hero>
          <HeroTitle>You don't have any spaces :(</HeroTitle>
          <HeroDescription>
            Spaces are places for you to put related thoughts, outlines, and
            drafts. They work well if you keep them broad and put as much in
            them as you can.
          </HeroDescription>
          <Link href="/app/spaces/new">
            <a className="group mt-8 bg-gray-200 font-semibold border shadow border-gray-700 px-6 py-3 rounded-lg hover:bg-black hover:shadow-md transition-all duration-200 flex flex-row items-center space-x-2">
              <PlusCircleFill
                size={20}
                className="text-gray-700 group-hover:text-white"
              />
              <span className="text-gray-700 group-hover:text-white">
                Create your first space
              </span>
            </a>
          </Link>
        </Hero>
      ) : (
        <h1>You have {spaces.length} spaces.</h1>
      )}
    </OffsetBackground>
  );
};

export default Home;
