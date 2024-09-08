import { searchPackages } from "../../api/queries/searchPackages";
import { PackageSummary } from "../../api/types/packageSummary";

export interface SearchLoaderResult {
  searchResults: PackageSummary[];
}

export async function searchLoader({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderResult> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Search term must be provided.");
  }

  //this calls the api with the term we grabbed from the url above.
  const results = await searchPackages(term);

  return {
    searchResults: results,
  };
}
