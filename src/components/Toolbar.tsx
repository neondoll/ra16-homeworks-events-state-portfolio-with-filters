import cn from "classnames";
import type { HTMLAttributes } from "react";

interface ToolbarProps {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  filters: Filter[];
  onSelectFilter: (filter: Filter) => void;
  selected: Filter;
}

function Toolbar({ className, filters, onSelectFilter, selected }: ToolbarProps) {
  return (
    <div className={cn(className, "toolbar")}>
      {filters.map((filter, index) => (
        <button
          className={cn("toolbar__item", filter === selected && "toolbar__item--selected")}
          key={`toolbar-filter-${index + 1}`}
          type="button"
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
