import styled from "styled-components";

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid #bdbdbd;
  label {
    cursor: pointer;
    text-align: center;

    input {
      display: none;

      &:checked + span {
        ::after {
          content: "";
          display: block;
          margin: 18px auto 0 auto;
          width: 6rem;
          border-bottom: 3px solid blue;
          border-radius: 4px 4px 0px 0px;
        }
      }
    }
  }
`;
