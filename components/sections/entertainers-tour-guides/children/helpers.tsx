export const getVisibleTabs = (activeIndex: number, tabs: any[]) => {
  const left = activeIndex === 0 ? tabs.length - 1 : activeIndex - 1;
  const right = activeIndex === tabs.length - 1 ? 0 : activeIndex + 1;
  return [tabs[left], tabs[activeIndex], tabs[right]];
};
