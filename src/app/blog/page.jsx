import BlogCard from "@/components/blog/blogCard";
import { getAllBlogPosts } from "@/lib/appwriteConfig";

const shortenDesc = (desc) => {
  const descArr = desc.split(" ");
  const shortenArr = descArr.slice(0, 15);

  return shortenArr.join(" ");
};

const BlogPage = async () => {
  const { documents } = await getAllBlogPosts();

  return (
    <>
      <h1 className="text-3xl text-center my-8">Blog Posts</h1>
      <div className="flex flex-wrap">
        {documents.map((blog) => {
          const description = `${shortenDesc(blog.body)}...`;
          return (
            <BlogCard
              key={blog.$id}
              title={blog.title}
              description={description}
              id={blog.$id}
            />
          );
        })}
      </div>
    </>
  );
};
export default BlogPage;
