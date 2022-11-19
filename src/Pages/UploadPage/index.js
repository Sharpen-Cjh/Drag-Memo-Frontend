import React, { useState } from "react";
import styled from "styled-components";
import { createPost } from "../../service/requests";

export default function UploadPage() {
  const [content, setContent] = useState({
    title: "",
    description: "",
  });

  const handleContent = (event) => {
    if (event.currentTarget.id === "titleInput") {
      setContent({
        ...content,
        title: event.target.value,
      });
    } else {
      setContent({
        ...content,
        description: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (content.title === "" || content.description === "") {
        return alert("모든항목을 채워주세요");
      }

      await createPost(content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <SubmitButton type="submit" onClick={handleSubmit}>
        제출
      </SubmitButton>
      <UploadLabel>제목</UploadLabel>
      <UploadTitleInput id="titleInput" onChange={handleContent} />
      <UploadLabel>내용</UploadLabel>
      <UploadDescriptionTextArea id="description" onChange={handleContent} />
    </Container>
  );
}
const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UploadLabel = styled.label``;

const UploadTitleInput = styled.input`
  height: 20vmin;
  width: 100vmin;
`;

const UploadDescriptionTextArea = styled.textarea`
  height: 80vmin;
  width: 100vmin;
`;

const SubmitButton = styled.button`
  height: 3vmax;
  width: 100vmin;
`;
