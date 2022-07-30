export interface Team {
  title: string
  path: string
}

export const teams: Team[] = [
  {
    title: 'Crest Gaming Lst',
    path: 'CGL'
  },
  {
    title: 'CAG',
    path: 'CAG'
  },
  {
    title: 'FAV gaming',
    path: 'FAV'
  },
  {
    title: 'FNATIC',
    path: 'FNATIC'
  },
  {
    title: 'KAWASAKI SCARZ',
    path: 'SCARZ'
  },
  // {
  //   title: 'PSG Esports',
  //   path: 'PSG'
  // },
  {
    title: 'REJECT',
    path: 'REJECT'
  },
  // {
  //   title: 'Sengoku Gaming',
  //   path: 'SG'
  // }
  {
    title: '父の背中',
    path: 'FB'
  },
  {
    title: 'NORTHEPTION',
    path: 'NT'
  }
]

export const getTeamByPath = (path: string): Team | undefined => {
  return teams.filter((team) => team.path === path)[0]
}

export const getImgPathByPath = (path: string): string => {
  return `/logo/${path}.png`
}
