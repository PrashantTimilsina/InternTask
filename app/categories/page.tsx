// "use client";
// import { useParams, usePathname, useSearchParams } from "next/navigation";

function handleDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Categories() {
  await handleDelay(1000);
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const categoryName = searchParams.get("name");
  // const params = useParams();
  // const name = params.name;

  // console.log(pathname);
  return <div>hello</div>;
}

export default Categories;
