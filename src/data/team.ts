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
    title: 'CYCLOPS athlete gaming OSAKA',
    path: 'CAG'
  },
  // {
  //   title: 'DONUTS USG',
  //   path: 'USG'
  // },
  {
    title: 'FAV gaming',
    path: 'FAV'
  },
  {
    title: 'FNATIC',
    path: 'FNATIC'
  },
  // {
  //   title: 'IGZIST',
  //   path: 'IGZIST'
  // },
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
  }
  // {
  //   title: 'Sengoku Gaming',
  //   path: 'SG'
  // }
]

export const getTeamByPath = (path: string): Team => {
  return teams.filter((team) => team.path === path)[0]
}
