import VideoList from "@/components/VideoList";

const Videos = () => {
  console.log(" :");

  return (
    <section className="min-h-screen w-full bg-black">
      <h1 className="py-20 text-center text-4xl text-white underline md:text-9xl">
        Ambient Videos
      </h1>
      <VideoList />
    </section>
  );
};

export default Videos;
