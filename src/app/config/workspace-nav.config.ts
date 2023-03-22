export const WorkspaceNav: any = {
  start: [
    { id: 1, name: 'FILES', icon: 'icon_Files', actions: [{ target: 'sider', component: 'SiderComponent' }], order: 1 },
    { id: 2, name: 'SEARCH', icon: 'icon_Search', actions: [{ target: 'sider', component: 'CloudSiderComponent' }], order: 2 },
    { id: 3, name: 'GITHUB', icon: 'icon_Github', actions: [{ target: 'sider', component: 'CloudSiderComponent' }], order: 3 },
    { id: 4, name: 'NUGET', icon: 'icon_Nuget', actions: [{ target: 'sider', component: 'CloudSiderComponent' }], order: 4 },
    { id: 5, name: 'CLOUD', icon: 'icon_Cloud', actions: [{ target: 'sider', component: 'CloudSiderComponent' }], order: 5 }
  ],
  end: [
    { id: 6, name: 'COLOR', icon: 'icon_Color', actions: [{ target: 'sider', component: 'SiderComponent' }], order: 1 },
    { id: 7, name: 'SETTINGS', icon: 'icon_Gear', actions: [{ target: 'sider', component: 'SiderComponent' }], order: 2 }
  ]
}
