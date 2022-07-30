import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { TopContent } from '~/content/Top'
import { getTeamByPath, Team, teams } from '~/data/team'

interface Props {
  team: Team
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const path = params?.path as string
  const team = getTeamByPath(path)
  if (team === undefined) {
    throw new Error('team is not found.')
  }

  return {
    props: {
      team
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: any }[] = []

  teams.map(({ path }) => {
    paths.push({ params: { path } })
  })

  return {
    paths,
    fallback: false
  }
}

const DetailPage: NextPage<Props> = (props) => {
  const { team } = props

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
