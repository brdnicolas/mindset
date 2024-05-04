export type Route = {
  path: string
  name: string
  iconName: string
}

export const MAIN_ROUTES: Route[] = [
  {
    path: '/',
    name: 'Mes candidatures',
    iconName: 'solar:folder-bold'
  },
  {
    path: '/statistics',
    name: 'Statistiques',
    iconName: 'solar:chart-square-bold'
  }
]

export const SECONDARY_ROUTES: Route[] = [
  {
    path: '/settings',
    name: 'Paramètres',
    iconName: 'solar:settings-bold'
  },
  {
    path: '/plans',
    name: 'Plans',
    iconName: 'solar:card-bold'
  }
]

export const isActivePath = (path: string) => {
  const cleanPath = path.split('/')[1]

  return window.location.href.split('/')[3] === cleanPath
}
