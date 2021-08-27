export default (inUrl: string): boolean => {
  try {
    new URL(inUrl);
    return true;
  } catch (_) {}
  return false;
};
