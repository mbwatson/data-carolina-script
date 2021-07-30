import useRouter from 'next/router';

const Post = ({router}) => {
<Layout title={router.query.title}>
    <p>hello world {router.query.title}</p>
</Layout>
}
export default useRouter(Post);