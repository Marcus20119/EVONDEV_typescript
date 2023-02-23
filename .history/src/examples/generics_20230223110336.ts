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
  rankCallback: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map(item => ({
    item,
    rank: rankCallback(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map(rank => rank.item);
}

const languages: {
  name: string;
  difficulty: number;
}[] = [
  {
    name: 'ReactJS',
    difficulty: 60,
  },
  {
    name: 'VueJS',
    difficulty: 80,
  },
  {
    name: 'Angular',
    difficulty: 40,
  },
];

const sortedLanguages = ranker(languages, item => item.difficulty);

console.log(sortedLanguages);
