import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-1c7e20af","/components/layout.html","Layout",["/components/layout","/components/layout.md"]],
  ["v-df88a5ea","/components/table.html","Table",["/components/table","/components/table.md"]],
  ["v-e45cc9ec","/guide/install.html","安装",["/guide/install","/guide/install.md"]],
  ["v-621628ba","/guide/start.html","开始",["/guide/start","/guide/start.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
