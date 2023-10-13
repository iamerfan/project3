import Test from "@/components/test";

export const runtime = "edge";
export default async function Home() {
  return (
    <div className=" flex justify-center gap-5 items-center min-h-screen bg-white text-black relative">
      <Test data={await getData()} />
    </div>
  );
}

async function getData() {
  const res = await fetch("https://miras-server.vercel.app/api/home");
  return res.json();
}
