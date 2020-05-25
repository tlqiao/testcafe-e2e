import {Selector} from 'testcafe'
fixture("download file demo");
test('should download file successfully',async ()=> {
   await t.navigateTo("https://file-examples.com/index.php/sample-documents-download/sample-doc-download/");
   const downLoadElement = Selector('td a').withText('Download sample DOC file');
   await t.click(downLoadElement);
});