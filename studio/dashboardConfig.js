export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7a46c26b0f2879dc434b41',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog2-studio',
                  apiId: '1a7e5db2-f3d1-4b6d-afb7-0671513859ec'
                },
                {
                  buildHookId: '5d7a46c23dc10295eae001c0',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog2',
                  apiId: '1d3e1fb1-7192-4ab8-b54e-116690bf3032'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomtev/sanity-gridsome-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
