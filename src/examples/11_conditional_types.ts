// Ternary operator: Toán tử 3 ngôi
// condition ? true : false
// someType extends otherType ? trueType : falseType

type someType<T> = T extends string ? string : boolean;
export type someValue = someType<string>;

// Sử dụng infer để không cần phải khai báo nhiều lần với các kiểu dữ liệu khác nhau
type MyInfer<T> = T extends infer R ? R : any;
export type UseMyInfer1 = MyInfer<string>;
export type UseMyInfer2 = MyInfer<boolean>;
export type UseMyInfer3 = MyInfer<{
  age: number;
}>;

// Sử dụng mapped type + conditional type để xác định các key có props là function trả ra type void
// Tiếp tực sử dụng keyof để lấy ra giá trị cần => hover vào để biết rõ
type OptionsFlags2<T> = {
  [P in keyof T]: T[P] extends () => void ? P : never;
}[keyof T];
interface MyStudent {
  name: string;
  age: number;
  updateName(): void;
  updateAge(): void;
}
export type MyStudentConditional = OptionsFlags2<MyStudent>;
// type MyStudentConditional = 'updateName'
