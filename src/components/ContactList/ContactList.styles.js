import styled from '@emotion/styled';

export const ContactItems = styled.ul`
  list-style: none;
  padding: 5px;
  font-size: 1.1em;
`;

export const ContactItem = styled.li`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContactListButton = styled.button`
  background-color: #d64848;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;

  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
  transition: background-color 250ms linear;

  :hover {
    background-color: #af3939;
  }
`;
