import { useUserSpaces } from "data/spaces";
import Link from "next/link";
import { OffsetBackground } from "components/ui";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Hero, HeroTitle, HeroDescription, Button } from "components/ui";

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
            <Button as="a" icon={PlusCircleFill} className="mt-10">
              Create your first space
            </Button>
          </Link>
        </Hero>
      ) : (
        <h1>You have {spaces.length} spaces.</h1>
      )}
    </OffsetBackground>
  );
};

export default Home;
