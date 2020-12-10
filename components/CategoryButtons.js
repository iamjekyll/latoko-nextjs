import Link from "next/link";

const CategoryButtons = ({ categories = [] }) => {
  return (
    <div>
      {categories.map((_category) => (
        <Link href={`/categories/${_category.slug}`} key={_category.id}>
          <a>
            {_category.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoryButtons;
