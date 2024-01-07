import Author from "@/components/blog/author";
import { getPostById } from "@/lib/appwriteConfig";
import Image from "next/image";

const formatDate = (date) => {
  return date.slice(0, 10);
};

const SingleBlogPage = async ({ params }) => {
  const singlePost = await getPostById(params.slug);
  const { title, author, body, $createdAt } = singlePost;

  const formatedDate = formatDate($createdAt);
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
        <h1 className="text-5xl font-semibold ">{title}</h1>
        <p className="text-sm font-light">~{formatedDate}</p>
        <Author name={author} />
        <p className="text-lg">{body}</p>
      </div>
    </section>
  );
};
export default SingleBlogPage;
