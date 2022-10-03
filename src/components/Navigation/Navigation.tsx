import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import "./navigation.scss";
import { selectItems } from "../../store/cartSlice";
import { selectSearchTerm, setSearchTerm } from "../../store/productSlice";
import menu from "../../assets/icons/menu.svg"
import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";

const Navigation = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const cartTotal = useAppSelector<number>(selectItems);
    const searchTerm = useAppSelector<string>(selectSearchTerm);

    const [ searchValue, setSearchValue ] = useState<string>('');

    const getSearch = (e: any) => {
        if (e === '') return;
        setSearchValue(e.target.value.toLowerCase());
    };

    useEffect(() => {
        setSearchValue(searchTerm);
    }, [searchTerm]);

    const setSearch = (e: any) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchValue));

        navigate({
            pathname: 'search',
            search: `?q=${searchValue}`
        });
    };

    return (
        <nav>
            <div className="nav-left">
                <label htmlFor="hamburger">
                    <img src={menu} alt="menu" aria-label="menu"/>
                </label>
                <input type="checkbox" className="hamburger" id="hamburger"/>
                <div className="nav-links">
                    <Link to="/themes" className="nav-hover">Themes</Link>
                    <Link to="/interest" className="nav-hover">Interest</Link>
                    <Link to="/sale" className="nav-hover">Sale</Link>
                </div>
            </div>
            <div className="nav-right">
                <form className="search" onSubmit={setSearch}>
                    <input
                        name="search"
                        type="text" 
                        placeholder="Search..." 
                        defaultValue={searchTerm} 
                        onChange={getSearch}
                        required
                    />
                    <button type="submit" aria-label="search products" onSubmit={setSearch}>
                        <img src={search} alt="search"></img>
                    </button> 
                </form>
                <Link to="/cart" className="nav-hover" aria-label="cart">
                    <img src={cart} alt="cart"></img><span className="nav-name"> Cart</span><span className="cartTotal"> ({cartTotal})</span>
                </Link>
            </div>
        </nav>
    )
};

export default Navigation;