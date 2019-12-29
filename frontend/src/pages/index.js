import { CreatePlayerPage } from './create/player/page'
import { HomePage } from './home/page'
import { NotFoundPage } from './not-found/page'

export const routes = () => [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/create/player/',
        exact: true,
        component: CreatePlayerPage,
    },
    { component: NotFoundPage },
]
