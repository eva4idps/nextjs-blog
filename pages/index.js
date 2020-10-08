import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/externalAPIPosts'
// import defaultAvatar from '../public/images/profile.jpg' 
//有await就要try catch
export async function getStaticProps() {
  let posts = {}
  let isSuccess = false
  try {
    posts = await getSortedPostsData()
  } catch(e) {
    console.log('getStaticProps', e.message)
    isSuccess = false
    return isSuccess
  }
  //api回傳錯誤訊息
  if (posts.error != 0) {
    isSuccess = false
  } else {
    isSuccess = true
  }
  
  return { //當作props回傳
    props: {
      isSuccess,
      posts
    }
  }
}

export default function Home({ isSuccess, posts }) {
  console.log("posts", posts)
  console.log("isSuccess", isSuccess)
  return (
    <Layout avatar={!isSuccess ? `/images/profile.jpg` : posts.user.avatar} name={!isSuccess ? `Alex` : posts.user.display_name}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello. My name is {!isSuccess ? `Alex` : posts.user.display_name}. Nice to meet you!</p>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {Array.isArray(posts)?"做map":posts?.rate}
        </ul>
      </section>
    </Layout>
    
  )
}
