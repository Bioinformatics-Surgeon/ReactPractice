function first() {
  return second();
}

function second() {
  return third();
}

function third() {
  return fourth();
}

function fourth() {
  return fifth();
}

function fifth() {
  return '🥞';
}

first();
