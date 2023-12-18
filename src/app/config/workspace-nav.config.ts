// export const WorkspaceNav: any = {
//   start: [
//     { id: 1, name: 'FILES', icon: { id: 'icon_Files', vBox: 24 }, actions: [{ service: 'view', method: 'load', params: { components: [{ target: 'sider', component: 'SiderComponent' }] } }], order: 1, selected: true },
//     { id: 2, name: 'SEARCH', icon: { id: 'icon_Search', vBox: 24 }, actions: [{ service: 'view', method: 'load', params: { components: [{ target: 'sider', component: 'CloudSiderComponent' }] } }], order: 2 },
//     { id: 3, name: 'GITHUB', icon: { id: 'icon_Github', vBox: 16 }, actions: [{ service: 'view', method: 'load', params: { components: [{ target: 'sider', component: 'GithubComponent' }] } }], order: 3 },
//     { id: 4, name: 'NUGET', icon: { id: 'icon_Nuget', vBox: 32 }, actions: [{ service: 'view', method: 'load', params: { components: [{ target: 'sider', component: 'CloudSiderComponent' }] } }], order: 4 },
//     { id: 5, name: 'CLOUD', icon: { id: 'icon_Cloud', vBox: 16 }, actions: [{ service: 'view', method: 'load', params: { components: [{ target: 'sider', component: 'CloudSiderComponent' }] } }], order: 5 }
//   ],
//   end: [
//     { id: 6, name: 'COLOR', icon: { id: 'icon_Color', vBox: 16 }, actions: [{ service: 'theme', method: 'toggle' }], order: 1 },
//     { id: 7, name: 'SETTINGS', icon: { id: 'icon_Gear', vBox: 24 }, actions: [], order: 2 }
//   ]
// }
export const WorkspaceNav: any = {
  start: [
    { id: 1, name: 'DESIGN', icon: { id: 'icon_Paintcan', vBox: 24 }, actions: [{ service: 'view', method: 'load', params: { components: [{ target: 'sider', component: 'SiderComponent' }] } }], order: 1, selected: true },
    { id: 2, name: 'DATA', icon: { id: 'icon_Search', vBox: 24 }, actions: [{ service: 'view', method: 'load', params: { components: [{ target: 'sider', component: 'CloudSiderComponent' }] } }], order: 2 },
    { id: 3, name: 'CDS', icon: { id: 'icon_Github', vBox: 16 }, actions: [{ service: 'view', method: 'load', params: { components: [{ target: 'sider', component: 'GithubComponent' }] } }], order: 3 }
  ],
  end: [
    { id: 6, name: 'COLOR', icon: { id: 'icon_Color', vBox: 16 }, actions: [{ service: 'theme', method: 'toggle' }], order: 1 },
    { id: 7, name: 'SETTINGS', icon: { id: 'icon_Gear', vBox: 24 }, actions: [], order: 2 }
  ]
}
