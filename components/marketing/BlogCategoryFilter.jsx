export function BlogCategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(null)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          activeCategory === null
            ? "bg-primary text-primary-foreground"
            : "bg-card text-muted-foreground border border-border hover:bg-accent hover:text-accent-foreground"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === cat
              ? "bg-primary text-primary-foreground"
              : "bg-card text-muted-foreground border border-border hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}