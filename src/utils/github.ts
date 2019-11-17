export function hasInvalidRepoName(value: string) {
  if (!value) {
    return undefined;
  }

  const arrayOfRepos = getRepoList(value);

  function cleanWhite(val: string) {
    return !!val;
  }

  function trim(val: string) {
    return val.trim();
  }

  function hasInvalidName(val: string) {
    const REGEX = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/gi;
    return !REGEX.test(val);
  }

  const hasInvalid = arrayOfRepos
    .filter(cleanWhite)
    .map(trim)
    .some(hasInvalidName);

  return hasInvalid;
}

export function getRepoList(repos: string = "") {
  return repos.split(",").map((e: string) => e.trim());
}
