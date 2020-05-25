import {Selector, t} from 'testcafe'
fixture('simulate keyboard action');
test('should simulate keyboard action successfully', async () => {
    await t.navigateTo('https://devexpress.github.io/testcafe/example/');
    await t.typeText('#developer-name','test')
        .pressKey('shift+a');
    await t.pressKey('enter');
    await t.pressKey('tab');
});