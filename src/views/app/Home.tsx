import { useUserSpaces } from "data/spaces";

const Home = () => {
  const spaces = useUserSpaces();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Your Spaces</h1>
      {spaces.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-32 rounded-md border border-gray-300 bg-gray-100">
          <h1 className="text-xl font-semibold">
            You don't have any spaces :(
          </h1>
          <p className="max-w-lg text-sm text-center mt-1 text-gray-500">
            Spaces are places for you to put related thoughts, outlines, and
            drafts. They work well if you keep them broad and put as much in
            them as you can.
          </p>
          <button className="mt-8 bg-black text-white border border-blue-700 shadow-sm px-6 py-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-200">
            Create your first space
          </button>
        </div>
      ) : (
        <h1>You have {spaces.length} spaces.</h1>
      )}
    </div>
  );
};

export default Home;
