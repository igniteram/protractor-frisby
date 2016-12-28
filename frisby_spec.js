// Latest nodejs versions(6 onwards) support `const`, it is preferred than `var`
const frisby = require('frisby');
// test API url- we could perform all operations on it!
const test_url = 'http://jsonplaceholder.typicode.com/posts';
/*
Following test case validates the GET response of the test API url
1) Validates/asserts response Status
2) Validates/asserts response Header
3) Validates/asserts response Data Type
**/
frisby
    .create('To test the GET response types of test_url ')
    .get(test_url)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes('0', {
        userId: Number,
        id: Number,
        title: String,
        body: String
    })
    .toss()
/*
Following test case validates the GET response data of the test API url
Note that the test_url = http://jsonplaceholder.typicode.com/posts/1
1) Validates/asserts response Status
2) Validates/asserts response Header
3) Validates/asserts response Data
**/
frisby
    .create('To test the GET response data of test_url ')
    .get(test_url + '/1')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON({
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    })
    .toss()
/*
Following test case validates the POST response data of the test API url
1) Validates/asserts response Status
2) Validates/asserts response Header
3) Validates/asserts response Data
4) Validates/asserts response Data Type
**/
frisby
    .create('To test the POST response data of test_url ')
    .post(test_url, {
        title: 'test_foo',
        body: 'test_bar',
        userId: 188
    })
    .expectStatus(201)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON({
        title: 'test_foo',
        body: 'test_bar',
        userId: 188,
        id: 101
    })
    .expectJSONTypes({
        userId: Number,
        id: Number,
        title: String,
        body: String
    })
    .toss()
/*
Following test case validates the PUT response data of the test API url
1) Validates/asserts response Status
2) Validates/asserts response Header
3) Validates/asserts response Data
4) Validates/asserts response Data Type
**/
frisby
    .create('To test the PUT response data of test_url ')
    .put(test_url + '/1', {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    .expectJSONTypes({
        userId: Number,
        id: Number,
        title: String,
        body: String
    })
    .toss()
/*
Following test case validates the DELETE response data of the test API url
1) Validates/asserts response Status
2) Validates/asserts response Header
3) Validates/asserts response Data which should empty Object
**/
frisby
    .create('To test the DELETE response of test url')
    .delete(test_url + '/1')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON({ })  // Expecting empty object as it is deleted
    .toss()


