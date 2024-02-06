import { NewButton } from "./NewButton";
import { List } from "./List";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-primary  h-full w-[60px] text-white flex p-3 flex-col gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};