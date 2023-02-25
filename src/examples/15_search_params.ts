import { String, Union } from 'ts-toolbelt';

// ts-toolbelt tương tự thư viện lodash của javascript, chứa rất nhiều phương thức hay ho để có thể sử dụng với type
const query = '/home?name=marcus&age=22';
// const objQueryResults = ABCType = {
// name: "marcus",
// age: 22,
// }
type Query = typeof query;
type SecondQueryPart = String.Split<Query, '?'>[1];
type QueryElements = String.Split<SecondQueryPart, '&'>;
type QueryParams = {
  [Q in QueryElements[number]]: {
    [K in String.Split<Q, '='>[0]]: String.Split<Q, '='>[1];
  };
}[QueryElements[number]];

const objQueryResult: Union.Merge<QueryParams> = {
  name: 'marcus',
  age: '22',
};
