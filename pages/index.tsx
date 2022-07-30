import type { NextPage } from 'next'
import Head from 'next/head'
import { TopContent } from '~/content/Top'

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>トップ</title>
      </Head>

      <TopContent />
    </>
  )
}

export default TopPage
