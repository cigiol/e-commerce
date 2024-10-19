import Button from "@components/Button";

const Card = ({ id = "", image = "", name = "", price = "" }) => {
  return (
    <div className="flex flex-col justify-between bg-white p-3 gap-3">
      <img src={image} />
      <span className="text-primary">{price} ₺</span>
      <span className="text-black">{name}</span>
      <Button buttonText="Add To Cart" buttonClass="rounded-md p-2" />
    </div>
  );
};

export default Card;
