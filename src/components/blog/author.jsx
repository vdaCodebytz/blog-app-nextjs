import Image from "next/image";

const Author = ({ img, name }) => {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden relative">
        <Image src="" alt="" fill />
      </div>
      <div>
        <h3 className="font-semibold">Author</h3>
        <p className="font-light capitalize">{name}</p>
      </div>
    </div>
  );
};
export default Author;
