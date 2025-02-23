import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Title() {
  return (
    <>
      <h1 className="text-4xl font-bold pt-[116px] flex justify-center items-center mb-5">
        Freelance Bold is launching soon
      </h1>
      <p className="max-w-[800px] mx-auto mb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nam
        eveniet possimus numquam. Quod numquam sequi in veritatis quam quaerat
        cum temporibus exercitationem. Nulla veritatis perferendis eum soluta
        amet labore!
      </p>
      <p className="max-w-[800px] mx-auto mb-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nam
        eveniet possimus numquam.
      </p>

      <div className="max-w-[500px] mx-auto">
        <Link href={""}>
          <Button className="w-full" size={"lg"}>
            Join Now
          </Button>
        </Link>
      </div>
    </>
  );
}
