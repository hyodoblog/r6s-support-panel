import type { NextPage } from 'next'
import Head from 'next/head'

import { TopContent } from '~/content/Top'
import { SITE_TITLE } from '~/data/constants'

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <TopContent />
    </>
  )
}

export default TopPage
