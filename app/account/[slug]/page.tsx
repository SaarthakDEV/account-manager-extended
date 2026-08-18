import AccountPage from "@/app/components/AccountPage";
import type { Metadata } from "next";

export const generateMetadata = async ({
  searchParams,
}: PageProps<"/account/[slug]">): Promise<Metadata> => {
  const { name } = await searchParams;

  return {
    title: name ? `Account - ${name}` : "Account",
  };
};

const Page = async ({ params }: PageProps<"/account/[slug]">) => {
  const { slug } = await params;
  return <AccountPage id={slug} />;
};

export default Page;
