import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { TopContent } from '~/content/Top'
import { getTeamByPath } from '~/data/team'

const DetailPage: NextPage = () => {
  const router = useRouter()
  const path = router.query.path as string
  const team = getTeamByPath(path)

  return (
    <>
      <Head>
        <title>{team.title}</title>
      </Head>

      <TopContent />
    </>
  )
}

export default DetailPage
