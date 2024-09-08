import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";

export default function SearchPage() {
  const data = useLoaderData() as SearchLoaderResult;
  console.log(data);
  return <div>SearchPage</div>;
}
