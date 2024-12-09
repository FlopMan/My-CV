// import { ClassicLoginView } from "@/sections/auth/classic";
// import { IndexAuth } from "@/sections/auth/shadcn/IndexAuth";
import { auth } from "@/auth";
import IndexMakeUI from "@/sections/auth/shadcn/IndexMakeUI";

const Page = async () => {
  const session = await auth();
  // return <ClassicLoginView />;
  // return <IndexAuth />;
  return <IndexMakeUI session={session} />;
};

export default Page;
