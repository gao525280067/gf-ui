export function add(id: number) {
  return {
    type: 'ADD', // 少量可直接用字符串，大量的话统一用常量，方便修改管理
    id,
  };
}

export function remove(id: number) {
  return {
    type: 'REMOVE',
    id,
  };
}
