import useRouter from 'next/router';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query
{slug : '/events/[.slug].js'}
  return <p>Post: {slug}</p>
}
export default Post