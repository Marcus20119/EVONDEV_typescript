function log(obj: { name: unknown } | { age: number }) {
  if ('name' in obj) {
    console.log(obj.name);
  }
}
