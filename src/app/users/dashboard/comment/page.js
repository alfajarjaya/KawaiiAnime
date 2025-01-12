import Header from '../../../../components/dashboard/header';
import { authUserSession } from '../../../../libs/auth-libs';
import prisma from "../../../../libs/prisma";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } });

  return (
    <section className="mt-8 container mx-auto px-6 py-8 h-screen">
      <Header title={"My Comments"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {comments.map((comment) => (
          <Link
            href={`/anime/${comment.anime_mal_id}`}
            key={comment.id}
            className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg hover:scale-[1.02] transform transition-all duration-300"
          >
            <div className="text-white">
              <p className="font-semibold text-lg mb-2">{comment.anime_title}</p>
              <p className="italic text-sm">{comment.comment}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
