export class test1 {
  constructor(name, experty) {
    this.name = name;
    this.experty = experty;
  }
  tes1(ret1) {
    alert(`${this.name}の${this.experty}メソッド実行`);
    return ret1;
  }
}