import BlogSection from '@/components/BlogSection'
import CommonFvSection from '@/components/CommonFvSection'
import CommonHead from '@/components/CommonHead'
import Footer from '@/components/Footer'
import { client } from '@/utils/contentful'

import type { GetStaticProps, GetStaticPaths } from 'next'
import type { ParsedUrlQuery } from 'node:querystring'

type Props = {
  blogData: any
  tagData: any
}

export default function Blog({ blogData, tagData }: Props) {
  return (
    <>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Blogページです。"
        title="Blog"
      />
      <div className="pageWrap">
        <main>
          <CommonFvSection desc="ブログ書いてます" title="Blog" />
          <BlogSection blogData={blogData} tagData={tagData} />
        </main>
        <Footer />
      </div>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params
}) => {
  const tagsRes = await client.getTags()
  // contentfulの型推論が壊れていそうなので、anyで回避
  const res = await (client as any)
    .getEntries({
      content_type: 'blog',
      'metadata.tags.sys.id[all]': params?.id
    })
    .catch(() => null)

  if (!res || !res.items.length) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false
      }
    }
  }

  return {
    props: {
      blogData: res,
      tagData: tagsRes
    },
    revalidate: 100
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: []
  }
}
