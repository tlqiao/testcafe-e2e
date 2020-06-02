const blogManage= require('../../../testdata/dataManage/blog-manage');
fixture('call api and read config file demo');
test('should call api and read config content successfully', async(t) => {
    await blogManage.addBlogToPrepareTestData();
});