import styled from "styled-components";
import searchIcon from "assets/icons/search_icon.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { findPostsByQuery } from "api/PostsApi";

export const PostsSearch = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findPostsByQuery(search));
  }, [search]);

  return (
    <Container>
      <Icon src={searchIcon} alt="" />
      <StyledInput
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        type="text"
        placeholder="Поиск по названию статьи"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  width: 20px;
  height: 100%;
  top: 0;
  left: 10px;
  pointer-events: none;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;
  border: 2px solid #dce0e4;
  border-radius: 6px;
`;
