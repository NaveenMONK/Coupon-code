const coupon = document.querySelector(".coupon");
const btn = document.querySelector(".button");
const msg = document.querySelector(".result");

const couponGen = () => {
  const code = Math.floor(Math.random() * 1000).toString();
  if (code.length > 2) {
    couponNum = `ITSNAVEEN-${code}`;
    coupon.value = couponNum;
  }
};

btn.addEventListener("click", () => {
  coupon.select();
  document.execCommand("copy");
  btn.textContent = "Copied";
  btn.disabled = true;
  msg.textContent = `Your Next New Coupon  will be generated in 3sec `;
  setTimeout(() => {
    btn.textContent = "Copy";
    couponGen();
    msg.textContent = "Click the button below for coupon";
    btn.disabled = false;
  }, 3000);
});

couponGen();
