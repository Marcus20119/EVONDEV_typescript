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

// Chuyển tất cả key trong 1 type thành 1 type khác
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

export type FeatureOptions = OptionsFlags<FeatureFlags>;

// Trừ đi 1 thuộc tính nào đó cho tất cả thuộc tính của 1 type có sẵn
// Removes 'readonly' attributes from a type's properties, giữ nguyên type cũ của thuộc tính
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]; // Tương tự Object[key]
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

export type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
// Viết lại Required
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

export type User = Concrete<MaybeUser>;

//
type Getters<Type> = {
  [Property in keyof Type as `on${Capitalize<Property & string>}Change`]: (
    value: Type[Property]
  ) => void;
};

interface Person {
  name: string;
  age: number;
  location: string;
}

export type LazyPerson = Getters<Person>;
// onNameChange: (value: string) => void;
//     onAgeChange: (value: number) => void;
//     onLocationChange: (value: string) => void;
