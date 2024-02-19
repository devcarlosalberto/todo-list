import styled from 'styled-components'

export const NewTaskFormContainer = styled.form`
  width: 100%;
  max-width: 73.6rem;
  height: 5.4rem;
  margin-inline: auto;
  margin-top: -2.7rem;

  @media (max-width: 768px) {
    padding-inline: 1.8rem;
  }

  display: flex;
  gap: 0.8rem;

  input {
    flex: 1;
    padding: 1.6rem;
    color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    background: ${(props) => props.theme['gray-500']};
  }

  input.fill,
  input:focus {
    color: ${(props) => props.theme['gray-100']};
    outline: 1px solid ${(props) => props.theme['purple-500']};
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    padding: 1.6rem;
    border: 0;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
    background: ${(props) => props.theme['blue-500']};
    cursor: pointer;

    transition: background-color 0.2s;

    svg {
      color: ${(props) => props.theme['gray-100']};
    }
  }

  button:hover {
    background: ${(props) => props.theme['blue-200']};
  }
`
