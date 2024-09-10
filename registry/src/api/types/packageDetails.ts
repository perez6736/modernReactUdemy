export interface PackageDetails {
  name: string;
  desc: string;
  readme: string;
  authors: {
    name: string;
    email: string;
  };
  maintainers: {
    name: string;
    email: string;
  }[];
  license: string;
}
