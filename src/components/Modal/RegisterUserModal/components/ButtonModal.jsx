import styled from 'styled-components';

const Button = styled.button`
    width: 200px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #4a6a46;
    background-color: ${(props) => {
    if (props.typebutton === 'default') {
      return '#4a6a46';
    } else if (props.typebutton === 'danger') {
      return props.theme.colors.danger;
    } else {
      return 'gray';
    }
  }};
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;

    transition: 0.3s all ease-in-out;
    &:hover{
        background-color: ${(props) => props.theme.colors.green};
        background-color: ${(props) => {
          if (props.typebutton === 'default') {
            return props.theme.colors.green;
          } else if (props.typebutton === 'danger') {
            return props.theme.colors.danger;
          } else if (props.typebutton === 'primary') {
            return 'blue';
          } else {
            return 'gray';
          }
        }};
        filter: none;
        opacity: 100%;
    }
`;

export default function ButtonModal({ type, label, typebutton, onClick }){
  return (
    <>
      <Button type={type} typebutton={typebutton} onClick={onClick}>{label}</Button>
    </>
  );
};

