export function repeat(number, callback){
  return Array(number).fill(null).map((_, i) => callback(i));
}
