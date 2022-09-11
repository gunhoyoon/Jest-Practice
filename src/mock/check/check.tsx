function Check(predicate, onSuccess, onFail) {
  if (predicate()) {
    onSuccess("yes");
  } else {
    onFail("no");
  }
}

module.exports = Check;
