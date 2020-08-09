import { Input, Label, InputDescription, FormControl } from "components/ui";

const NewSpaceForm = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-xl border border-gray-200 px-10 py-10 rounded-lg shadow-xl bg-white">
        <h1 className="font-semibold text-xl mb-6">New Space</h1>
        <form className="flex flex-col">
          <FormControl>
            <Label htmlFor="space-name">Space Name</Label>
            <Input
              type="text"
              id="space-name"
              placeholder="eg. My Awesome Blog"
            />
            <InputDescription>
              This will appear as the heading of the published blog.
            </InputDescription>
          </FormControl>
          <input className="w-full" type="text" placeholder="Space URL" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewSpaceForm;
