import dayjs from 'dayjs';
import { BigNumber, BigNumberish } from 'ethers';
import { formatUnits, parseUnits } from 'ethers/lib/utils';
import numbro from 'numbro';

export function fixMoney(m: any, precision?: number, average?: boolean) {
  if (precision == undefined) precision = 2;
  if (average == undefined) average = true;
  if (m == 0 || m == '0') {
    return '0';
  }
  return numbro(m).format({
    thousandSeparated: true,
    mantissa: precision,
    average: average,
  });
}
export function fixToken(m: any, precision: number = 4, symbol: string = '???', average: boolean = false) {
  if (precision == undefined) precision = 4;
  return fixMoney(m, precision, average) + ' ' + symbol;
}

export function fixPercent(m: any, precision?: number) {
  if (precision == undefined) precision = 2;
  return fixMoney(m * 100, precision, false) + '%';
}

export function toDay(d: any) {
  if (typeof d === 'string') {
    return d;
  } else {
    return dayjs(d).format('YYYY-MM-DD');
  }
}

export function toDateTime(d: any) {
  if (typeof d === 'string') {
    return d;
  } else {
    return dayjs(d).format('YYYY-MM-DD HH:mm');
  }
}

export function ellipsis(d: string, prefix?: number, suffix?: number) {
  if (prefix == undefined) prefix = 6;
  if (suffix == undefined) suffix = 4;
  if (d.length > prefix + suffix + 1) {
    return d.substring(0, prefix) + '...' + d.substring(d.length - suffix);
  } else {
    return d;
  }
}

export function debug(item: any) {
  console.log(item);
}

export function fixFloat(num: number, fractionDigits = 2) {
  return parseFloat(num.toFixed(fractionDigits));
}

export function numCls(num: number) {
  if (num > 0) {
    return 'text-green-500';
  } else if (num < 0) {
    return 'text-red-500';
  }
  return '';
}

export function parsePercent(num: any) {
  return numbro.unformat(num.toString());
}

export function convert2Number(amount: BigNumberish, decimals = 18): number {
  return parseFloat(formatUnits(amount, decimals));
}

export function convert2BigNumber(amount: number, decimals = 18): BigNumber {
  return parseUnits(amount.toString(), decimals);
}

export function parseBigNumber(amount: string, decimals = 18): BigNumber {
  return parseUnits(amount, decimals);
}
