import { getPackage } from "../../api/queries/getPackage";
import type { Params } from "react-router-dom";
import type { PackageDetails } from "../../api/types/packageDetails";

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader({
  params,
}: {
  params: Params;
}): Promise<DetailsLoaderResult> {
  const { name } = params;

  if (!name) {
    throw new Error("name must be provided.");
  }

  const details = await getPackage(name);

  return {
    details,
  };
}
