import styled from "styled-components";

export const Styles = styled.div`
  max-width: 72rem;
  margin: auto;
  display: flex;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 20px;
  }

  form {
    border: 1px solid black;
    padding: 60px;
  }
  .user-details {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 5rem;
    row-gap: 2rem;
  }

  .user-details > div {
    display: grid;
  }

  label {
    font-size: 12px;
    font-weight: 600;
  }
  input,
  select,
  textarea {
    outline: none;
    border: 1px solid gray;
    padding: 11px;
    border-radius: 5px;
  }

  .address-details {
    display: grid;
    padding-top: 1rem;
  }

  .button {
    text-align: end;
    margin-top: 2rem;
  }
  button {
    outline: none;
    border: 1px solid transparent;
    font-weight: 600;
    color: #fff;
    padding-inline: 12px;
    padding-block: 7px;
    border-radius: 3px;
    background: #673ab7;
  }
  small {
    color: red;
  }

  .invalid {
    border: 1px solid red;
  }
  valid {
    border: 1px solid green;
  }

  .form-control {
    width: 186px;
    height: 21px;
    border: 1px solid black;
    background: red;
  }
`;
