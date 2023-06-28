import BlogSection from '@/components/BlogSection'
import CommonFvSection from '@/components/CommonFvSection'
import CommonHead from '@/components/CommonHead'
import Footer from '@/components/Footer'
import { client } from '@/utils/contentful'

import type { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const tagsRes = await client.getTags()
  const res = await client.getEntries({
    content_type: 'blog'
  })

  return {
    props: {
      blogData: res,
      tagData: tagsRes
    }
  }
}
