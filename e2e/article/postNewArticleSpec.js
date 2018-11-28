import menu from '../util/menu'
import newArticle from './pages/newArticlePage'
fixture('publish new article test')
test('should publish new article test', async (t) => {
   await menu.login(t)
   await menu.goToNewArticle(t)
   await newArticle.publishArticle(t,'title','description','content')
   await t.expect(await newArticle.getArticleTitle()).eql('title')
} )