"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogCard = ({ title, description, id }) => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <Card className="w-[30%] mx-4 my-4">
      <CardHeader>
        <div className="w-full h-52 relative rounded-lg overflow-hidden mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-semibold mt-2">{title}</h2>
        <p className="mt-2 font-light text-sm">{description}</p>
        <Button
          className="mt-2"
          onClick={() => {
            handleClick(id);
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};
export default BlogCard;
