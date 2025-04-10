import { getCurrentSession } from "@/actions/auth";

const Home = async () => {

  const { user } = await getCurrentSession()

  return (
    <div>
      Home page {JSON.stringify(user)}
    </div>
  );
}

export default Home;
