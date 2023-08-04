import Cart from "./Cart";
import Logo from "./Logo";
import Search from "./Search";

const Middle = () => {
    return (
        <div className="flex justify-between items-center px-2 gap-4">
            <Logo />
            <Search />
            <Cart />
        </div>
    );
}

export default Middle;