import BlogCard from "@/components/blog/blogCard";

const BlogPage = () => {
  return (
    <>
      <h1 className="text-3xl text-center my-8">Blog Posts</h1>
      <div className="flex flex-wrap">
        <BlogCard />
      </div>
    </>
  );
};
export default BlogPage;
