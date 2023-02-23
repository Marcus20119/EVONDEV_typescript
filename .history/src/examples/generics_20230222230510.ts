// Generic sẽ tự động khai báo type tương ứng với tham số ta truyền vào
// Sử dụng khi có 1 type phức tạp nhưng sử dụng nhiều lần trong hàm nhưng nó lại phụ thuộc vào đối số truyền vào
// Ví dụ thay vì viết: string | number | boolean ta có thể viết như bên dưới
function genericExample<T>(val: T): void {}
genericExample('Mark');
genericExample(22);
genericExample(true);

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank[] = items.map(item => ({
    item,
    rank: rank(item),
  }));
  return ranks.map(rank => rank.item);
}
