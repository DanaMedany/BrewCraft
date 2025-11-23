function JourneyCard({
  name,
  description,
  image,
  id,
}: {
  name: string;
  description: string;
  image: string;
  id: number;
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
        <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">
          {id}
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-primary">{name}</h3>
        <p className="text-foreground mb-4">{description}</p>
      </div>
    </div>
  );
}

export default JourneyCard;
