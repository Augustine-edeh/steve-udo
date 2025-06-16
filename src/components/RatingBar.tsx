interface RatingBarProps {
  rating: number;
  skill: string;
}

const RatingBar = ({ rating, skill }: RatingBarProps) => {
  return (
    <div className="space-y-2 max-w-3xs lg:max-w-2xs">
      <h3 className="font-bold">{skill}</h3>

      <div className="flex items-center h-5 gap-5">
        <div className="flex bg-lightGray size-full">
          <div className="bg-lightGreen" style={{ width: `${rating}%` }} />
        </div>

        <span className="text-3xl font-semibold">{rating}%</span>
      </div>
    </div>
  );
};

export default RatingBar;
