import {
  Input,
  Label,
  InputDescription,
  FormControl,
  Card,
  Button,
} from "components/ui";
import { PlusCircleFill } from "react-bootstrap-icons";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const NewSpaceForm = () => {
  const formik = useFormik({
    initialValues: {
      spaceName: "",
      spaceStub: "",
    },
    validationSchema: Yup.object({
      spaceName: Yup.string().required("Required"),
      spaceStub: Yup.string()
        .required("Required")
        .min(3, "3 characters minimum"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Card className="w-full max-w-xl" shadow="xl">
        <h1 className="font-semibold text-xl mb-6">New Space</h1>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <Label htmlFor="space-name">Space Name</Label>
            <Input
              type="text"
              id="space-name"
              placeholder="eg. My Awesome Blog"
              {...formik.getFieldProps("spaceName")}
            />
            <InputDescription>
              This will appear as the heading of the published blog.
            </InputDescription>
          </FormControl>
          <FormControl>
            <Label htmlFor="space-stub">Space Stub</Label>
            <Input
              type="text"
              id="space-stub"
              placeholder="eg. myawesomeblog"
              {...formik.getFieldProps("spaceStub")}
            />
            <InputDescription>
              Think of this as your blog's 'username'. It'll be your subdomain
              path (eg. 'myawesomeblog.writ.blog').
            </InputDescription>
          </FormControl>
          <Button
            type="submit"
            className="mt-6 justify-center w-full"
            icon={PlusCircleFill}
          >
            Create Space
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default NewSpaceForm;
