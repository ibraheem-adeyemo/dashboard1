export function cleanGlobals(globalSet: Record<string, any>) {
  const cleaned: Record<string, any> = {};
  for (const key in globalSet) {
    const trimmed = key.trim();
    if (trimmed) {
      cleaned[trimmed] = globalSet[key];
    }
  }
  return cleaned;
}
