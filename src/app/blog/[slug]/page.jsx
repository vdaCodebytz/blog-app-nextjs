import Author from "@/components/blog/author";
import Image from "next/image";

const page = () => {
  return (
    <section className="flex gap-16 ">
      <div className="flex-1 h--auto max-h-screen relative rounded-lg overflow-hidden mx-auto">
        <Image
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <h1 className="text-5xl font-semibold ">Title</h1>
        <p className="text-sm font-light">~Date</p>
        <Author />
        <p className="text-lg">
          Aliqua duis sit dolore adipisicing sint eiusmod officia sunt veniam
          ullamco fugiat velit eiusmod do culpa cupidatat do incididunt esse do
          nulla sit proident labore voluptate. Amet incididunt ex ut dolor enim
          laboris cupidatat cillum laboris exercitation quis proident pariatur
          proident cupidatat consectetur proident sit eu veniam ut consequat
          magna esse nisi laborum nostrud laborum. Commodo laboris mollit labore
          in ex qui occaecat laborum ullamco duis magna ea non nulla minim do
          elit laborum ut eiusmod aute eiusmod. Lorem cupidatat et ad occaecat
          ut exercitation. Labore consequat voluptate duis magna ullamco labore
          excepteur aute et qui id duis quis anim pariatur voluptate ad
        </p>
      </div>
    </section>
  );
};
export default page;
