export interface Team {
  title: string
  path: string
}

export const teams: Team[] = [
  {
    title: 'CAG',
    path: 'CAG'
  },
  {
    title: 'KAWASAKI SCARZ',
    path: 'SCARZ'
  },
  {
    title: 'REJECT',
    path: 'REJECT'
  },
  {
    title: 'NORTHEPTION',
    path: 'NT'
  },
  {
    title: 'Crest Gaming Lst',
    path: 'CGL'
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
    title: 'PSG Esports',
    path: 'PSG'
  },
  {
    title: 'Sengoku Gaming',
    path: 'SG'
  },
  {
    title: '父の背中',
    path: 'FB'
  }
]

export const getTeamByPath = (path: string): Team | undefined => {
  return teams.filter((team) => team.path === path)[0]
}

export const getImgPathByPath = (path: string): string => {
  return `/logo/${path}.png`
}
