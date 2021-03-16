const v1 = 10;
function fn1(){
  console.log(v1);
}
function fn2(fn1){
  fn1();
}
fn2(fn1);