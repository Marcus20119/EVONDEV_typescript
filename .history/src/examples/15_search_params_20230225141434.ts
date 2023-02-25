import { String } from 'ts-toolbelt';

const query = '/home?name=marcus&age=22';
// const objQueryResults = ABCType = {
// name: "marcus",
// age: 22,
// }
type Query = typeof query;
type SecondQueryPart = String.Split<Query, '?'>[1];
