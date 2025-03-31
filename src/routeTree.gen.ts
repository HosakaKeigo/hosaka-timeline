/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResourcesImport } from './routes/resources'
import { Route as InfrastructureImport } from './routes/infrastructure'
import { Route as CompetitionImport } from './routes/competition'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ResourcesRoute = ResourcesImport.update({
  id: '/resources',
  path: '/resources',
  getParentRoute: () => rootRoute,
} as any)

const InfrastructureRoute = InfrastructureImport.update({
  id: '/infrastructure',
  path: '/infrastructure',
  getParentRoute: () => rootRoute,
} as any)

const CompetitionRoute = CompetitionImport.update({
  id: '/competition',
  path: '/competition',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/competition': {
      id: '/competition'
      path: '/competition'
      fullPath: '/competition'
      preLoaderRoute: typeof CompetitionImport
      parentRoute: typeof rootRoute
    }
    '/infrastructure': {
      id: '/infrastructure'
      path: '/infrastructure'
      fullPath: '/infrastructure'
      preLoaderRoute: typeof InfrastructureImport
      parentRoute: typeof rootRoute
    }
    '/resources': {
      id: '/resources'
      path: '/resources'
      fullPath: '/resources'
      preLoaderRoute: typeof ResourcesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/competition': typeof CompetitionRoute
  '/infrastructure': typeof InfrastructureRoute
  '/resources': typeof ResourcesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/competition': typeof CompetitionRoute
  '/infrastructure': typeof InfrastructureRoute
  '/resources': typeof ResourcesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/competition': typeof CompetitionRoute
  '/infrastructure': typeof InfrastructureRoute
  '/resources': typeof ResourcesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/competition' | '/infrastructure' | '/resources'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/competition' | '/infrastructure' | '/resources'
  id: '__root__' | '/' | '/competition' | '/infrastructure' | '/resources'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CompetitionRoute: typeof CompetitionRoute
  InfrastructureRoute: typeof InfrastructureRoute
  ResourcesRoute: typeof ResourcesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CompetitionRoute: CompetitionRoute,
  InfrastructureRoute: InfrastructureRoute,
  ResourcesRoute: ResourcesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/competition",
        "/infrastructure",
        "/resources"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/competition": {
      "filePath": "competition.tsx"
    },
    "/infrastructure": {
      "filePath": "infrastructure.tsx"
    },
    "/resources": {
      "filePath": "resources.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
