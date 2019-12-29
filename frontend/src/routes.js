import React from 'react'
import { renderRoutes } from 'react-router-config'

import { routes } from './pages'

const Routes = () => <>{renderRoutes(routes())}</>

export { Routes }
