import { useGetKiamoniBlocks } from '../kiamoni';

export function filterAndArrangeBlocks(namesToFilter: string[]) {
  const getKiamoniBlocks = useGetKiamoniBlocks();
  const resultMap = new Map();

  for (const block of getKiamoniBlocks()) {
    resultMap.set(block.name, block);
  }

  const filteredAndArrangedBlocks = [];

  for (const name of namesToFilter) {
    if (resultMap.has(name)) {
      filteredAndArrangedBlocks.push(resultMap.get(name));
      resultMap.delete(name);
    }
  }

  return filteredAndArrangedBlocks;
}
