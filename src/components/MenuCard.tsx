function MenuCard({
  name,
  description,
  price,
  image,
}: {
  name: string;
  description: string;
  price: number;
  image: string;
}) {
  return (
    <div className="rounded-2xl shadow-lg hover:shadow-2xl bg-secondary">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-primary">{name}</h3>
        <p className="text-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">${price}</span>
          <button>+&#32;Add</button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
