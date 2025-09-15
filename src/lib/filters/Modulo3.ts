export function Modulo3(x:number): number
{
      return x % 5;
}

export function modulo3Array(arr: number[]): number[]{
    return arr.map(Modulo3)
}