import Input from "@components/Input";

const Header = () => {
  return (
    <header className="bg-primary">
      <div className="flex justify-between items-center text-white p-1 gap-3 xl:container xl:mx-auto">
        <span>ETERATION</span>
        <Input />
        <div>
          <span>3000 ₺</span>
          <span>Cihan</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
