import Articles from '../../containers/Articles'
import CreateArticles from '../../containers/Articles/CreateArticle'

const articles = [
  {
    path: '/',
    main: Articles,
    exact: true,
  },
  {
    path: '/create',
    main: CreateArticles,
    exact: true,
  },
]

export default articles
