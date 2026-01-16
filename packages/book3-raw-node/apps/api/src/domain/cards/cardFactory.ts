import crypto from "node:crypto";

function randomDigits(n: number) {
  let s = "";
  for (let i = 0; i < n; i++) s += String(crypto.randomInt(0, 10));
  return s;
}

// Luhn check (makes PAN look real)
function luhnCheckDigit(numberWithoutCheck: string) {
  const digits = numberWithoutCheck.split("").map(Number).reverse();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let d = digits[i];
    if (i % 2 === 0) { // double every second digit in reversed array
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  const mod = sum % 10;
  return mod === 0 ? 0 : 10 - mod;
}

export function generateVirtualCard() {
  // 16 digits. Use "4" prefix for VISA-like
  const base15 = "4" + randomDigits(14);
  const check = luhnCheckDigit(base15);
  const pan = base15 + String(check);

  const cvv = randomDigits(3);

  const now = new Date();
  const expMonth = now.getMonth() + 1;
  const expYear = now.getFullYear() + 3;

  const last4 = pan.slice(-4);

  return { pan, cvv, expMonth, expYear, last4 };
}
