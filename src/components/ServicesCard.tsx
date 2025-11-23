function ServicesCard({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center p-6 m-4 hover:shadow-xl transition-all transform hover:scale-110">
      <div className="w-24 h-24 rounded-full bg-white flex mb-6 justify-center items-center">
        <img src={image} alt={name} className="w-9 h-9 object-contain" />
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-primary">{name}</h3>
      <p className="text-foreground text-center">{description}</p>
    </div>
  );
}

export default ServicesCard;
