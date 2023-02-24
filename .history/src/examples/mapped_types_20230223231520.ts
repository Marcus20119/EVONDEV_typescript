// Khi muốn thêm nhiều thuộc tính khác vào 1 type mà không muốn ghi chay thêm các thuộc tính đó
type Developer1 = {
  name: string;
} & Record<string, any>;

type Developer2 = {
  name: string;
  [key: string]: any;
};

export const myDeveloper: Developer1 | Developer2 = {
  name: 'Marcus Freeman',
  age: 22,
  gender: 'male',
  school: 'Danang University of Science and Technology',
};

//
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

const myStudent: OptionsFlags<Developer1> = {
  name: true,
  age: true,
  gender: true,
  school: true,
};
