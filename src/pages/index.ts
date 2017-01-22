import { HomePage } from './home/home';
import { PostPage } from './post/post';
import { PostsPage } from './posts/posts';
import { PagePage } from './page/page';
import { PagesPage } from './pages/pages';
import { ParamsPage } from './params/params';
import { BookmarksPage } from './bookmarks/bookmarks';
import { TaxonomiesModal } from './taxonomies-modal/taxonomies-modal';

export const MenuMapping = {
    post: PostPage,
    posts: PostsPage,
    page: PagePage,
    pages: PagesPage,
    bookmarks: BookmarksPage,
    params: ParamsPage
}

export const DeepLinkerLnks = [
  { component: PostPage, name: 'Post', segment: 'posts/:id' },
  { component: PostsPage, name: 'Posts', segment: 'posts' },
  { component: PagePage, name: 'Page', segment: 'pages/:id' },
  { component: PagesPage, name: 'Pages', segment: 'pages' },
  { component: BookmarksPage, name: 'Bookmarks', segment: 'bookmarks' },
  { component: ParamsPage, name: 'Settings', segment: 'settings' }
]

export default [
    HomePage,
    PostsPage,
    PostPage,
    PagePage,
    PagesPage,
    BookmarksPage,
    ParamsPage,
    TaxonomiesModal
];