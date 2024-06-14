import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "@/assets/styles/Search.module.scss";
import Input from "./Input";
import Button from "./Button";
import Icons from "@/assets/icons";

const cx = classNames.bind(style);

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
    setQuery("");
  };

  return (
    <form id="searchForm" onSubmit={handleSearch}>
      <div className={cx("wapper")}>
        <Input
          idInput="search"
          type="text"
          placeholder="Search for something ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          notMarginBottom
          notLabel
          notBoxShadow
        />
        <Button
          onlyIcon
          styleOrther={{ position: "absolute" ,"right":".5rem" }}
          type="submit"
          leftIcon={Icons.search}
        />
      </div>
    </form>
  );
}

export default Search;
