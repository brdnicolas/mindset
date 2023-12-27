import { IconName } from '@/components/atoms/icons/types'

export type Route = {
  path: string
  name: string
  iconName: IconName
}

export const MAIN_ROUTES: Route[] = [
  {
    path: '/',
    name: 'Mes candidatures',
    iconName: 'document'
  },
  {
    path: '/statistics',
    name: 'Statistiques',
    iconName: 'bar-chart-2'
  }
]

export const SECONDARY_ROUTES: Route[] = [
  {
    path: '/settings',
    name: 'Paramètres',
    iconName: 'gear'
  },
  {
    path: '/plans',
    name: 'Plans',
    iconName: 'credit-card'
  }
]

export const isActivePath = (path: string) => {
  const cleanPath = path.split('/')[1]

  return window.location.href.split('/')[3] === cleanPath
}
