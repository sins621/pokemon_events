import { Input } from "@/components/ui/input";

const SearchEvents: React.FC = () => {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search Events"
        className="focus-visible:ring-ring w-full rounded-lg border-0 bg-accent
          pl-7 placeholder:text-slate-600 focus-visible:ring-0
          focus-visible:ring-offset-0 focus-visible:outline-none"
      />
    </div>
  );
};

export default SearchEvents;
