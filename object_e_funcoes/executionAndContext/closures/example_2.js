function fn1(){
  return function(){
    console.log(v1);
  }
}

const fn2 = fn1();
fn2();