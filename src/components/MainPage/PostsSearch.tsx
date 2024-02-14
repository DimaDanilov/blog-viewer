import styled from "styled-components";
import searchIcon from "assets/icons/search_icon.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { findPostsByQuery } from "api/PostApi";
import { useInput } from "hooks/useInput";

export const PostsSearch = () => {
  const input = useInput("");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findPostsByQuery(input.value));
  }, [input.value]);

  return (
    <Container>
      <Icon src={searchIcon} alt="" />
      <StyledInput
        {...input.bind}
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
