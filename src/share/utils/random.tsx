import _ from 'lodash';

const characters = (min: number, max: number, count = 1) => {
  const char = [];
  for (let i = 0; i < count; i++) {
    char.push(String.fromCharCode(Math.random() * (max - min) + min));
  }
  return char.join("");
};

const password = () => {
  const lower = characters(97, 123, 7);
  const upper = characters(65, 91, 7);
  const number = characters(48, 58, 4);
  const special = characters(33, 47, 2);
  const str = lower + upper + number + special;
  return _.shuffle(str.split("")).join("");
};

const alphanumeric = (count: number) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < count; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const Random = {
  characters,
  password,
  alphanumeric,
}

export default Random;